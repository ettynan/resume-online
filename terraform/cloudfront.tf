resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "S3-OAC"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "resume_distribution" {
  origin {
    domain_name              = aws_s3_bucket.resume_site.bucket_regional_domain_name
    origin_id                = "S3Origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  enabled             = true
  default_root_object = var.default_root_object

    # Add this block to define custom domain aliases
  aliases = [var.domain_name, var.alternative_domain]

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.resume_cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3Origin"

    viewer_protocol_policy = "redirect-to-https"
    
    # Add forwarded_values here
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
      headers = ["Host"]
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
