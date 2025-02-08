variable "bucket_name" {
  description = "The name of the S3 bucket"
  type        = string
  default     = "resume-site-et"
}

variable "region" {
  description = "The AWS region where resources will be created"
  type        = string
  default     = "us-west-2" # Change to your preferred region
}

variable "domain_name" {
  description = "The custom domain name for the website (e.g., example.com)"
  type        = string
  default     = "etynan.click"
}

variable "alternative_domain" {
  description = "Alternative domain (e.g., www.example.com)"
  type        = string
  default     = "www.etynan.click"
}

variable "acm_certificate_arn" {
  description = "The ARN of the ACM certificate for CloudFront HTTPS"
  type        = string
}

variable "cloudfront_price_class" {
  description = "CloudFront price class to control cost (e.g., PriceClass_100, PriceClass_200, PriceClass_All)"
  type        = string
  default     = "PriceClass_100"
}

variable "default_root_object" {
  description = "Default root object for CloudFront distribution (e.g., index.html)"
  type        = string
  default     = "index.html"
}

variable "hosted_zone_id" {
  description = "The Route 53 Hosted Zone ID for the domain"
  type        = string
  default     = ""
}

variable "cloudfront_distribution_arn" {
  description = "The ARN of the CloudFront distribution"
  type        = string
}

