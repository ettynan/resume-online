resource "aws_s3_object" "website_files" {
  for_each = fileset("../website", "**/*")

  bucket = aws_s3_bucket.resume_site.id
  key    = each.value
  source = "../website/${each.value}"
  acl    = "public-read"

  content_type = lookup(
    {
      "html" = "text/html"
      "css"  = "text/css"
      "js"   = "application/javascript"
      "png"  = "image/png"
      "jpg"  = "image/jpeg"
    },
    split(".", each.value)[length(split(".", each.value)) - 1],
    "application/octet-stream"
  )
}
