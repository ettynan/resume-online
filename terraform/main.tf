provider "aws" {
  region = var.region  # Change if needed
}

resource "aws_s3_bucket" "resume_site" {
  bucket = var.bucket_name

  tags = {
    Name = "Cloud Resume Website"
  }
}

# Enable static website hosting
resource "aws_s3_bucket_website_configuration" "website_config" {
  bucket = var.bucket_name

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

# Make the S3 bucket publicly readable (Optional: Change for security)
resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = var.bucket_name

  block_public_acls       = true
  block_public_policy     = false
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# S3 Bucket Policy to Allow Public Read (Optional)
resource "aws_s3_bucket_policy" "public_read_policy" {
  bucket = var.bucket_name
  policy = <<EOT
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${var.bucket_name}/*"
    }
  ]
}
EOT
depends_on = [aws_s3_bucket.resume_site]  # Ensure this runs after the bucket is created
}
