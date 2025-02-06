#!/bin/bash

# Run the Terraform or AWS CLI command (example: syncing your resume to S3)
aws s3 sync ./my-website s3://my-resume-bucket --delete

echo "Resume updated successfully."
