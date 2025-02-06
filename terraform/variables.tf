variable "bucket_name" {
  description = "The name of the S3 bucket"
  type        = string
  default     = "resume-site-et"
}


variable "region" {
  description = "The AWS region where resources will be created"
  type        = string
  default     = "us-west-2"  # Change to your preferred region
}