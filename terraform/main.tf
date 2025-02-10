terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.50" # Ensure this version or higher
    }
  }
}

provider "aws" {
  region = var.region
}

# S3 Bucket for Resume Website
resource "aws_s3_bucket" "resume_site" {
  bucket = var.bucket_name

  tags = {
    Name = "Cloud Resume Website"
  }
}

# Restrict Public Access (CloudFront Will Control Access)
resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = var.bucket_name

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# S3 Bucket Policy to Allow CloudFront to Access Files Securely
resource "aws_s3_bucket_policy" "cloudfront_policy" {
  bucket     = var.bucket_name
  policy     = <<EOT
{
  "Version": "2008-10-17",
  "Id": "PolicyForCloudFrontPrivateContent",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipal",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${var.bucket_name}/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "${aws_cloudfront_distribution.resume_distribution.arn}"
        }
      }
    }
  ]
}
EOT
  depends_on = [aws_s3_bucket.resume_site]
}

# CloudFront Distribution (HTTPS)
output "cloudfront_domain_name" {
  description = "CloudFront domain name"
  value       = aws_cloudfront_distribution.resume_distribution.domain_name
}

# Route 53 DNS Record (Alias to CloudFront)
resource "aws_route53_record" "resume_dns" {
  zone_id = var.hosted_zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.resume_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.resume_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
