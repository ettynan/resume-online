resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "resume-site-et-oac"
  description                       = "OAC for resume site"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "resume_distribution" {
  origin {
    domain_name              = aws_s3_bucket.resume_site.bucket_regional_domain_name
    origin_id                = var.target_origin_id
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
    target_origin_id = var.target_origin_id
    cache_policy_id            = var.cache_policy_id
    origin_request_policy_id   = var.origin_request_policy_id

    viewer_protocol_policy = "redirect-to-https"
    

  # Explicitly set compression to true
  compress = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  price_class = var.cloudfront_price_class
  is_ipv6_enabled = true
}
