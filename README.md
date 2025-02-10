This guide provides detailed steps for deploying a **React-based resume website** on **AWS using Terraform**. It includes prerequisites, setup instructions, and deployment steps.

## **Table of Contents**

[**1️⃣ Prerequisites**](#1️⃣-prerequisites)

[**2️⃣ Setting Up AWS & IAM**](#2️⃣setting-up-aws--iam)

[**3️⃣ Installing Terraform**](#3️⃣-installing-terraform)

[**4️⃣ Preparing the React App**](#4️⃣-preparing-the-react-app)

[**5️⃣ Setting Up S3 for Static Hosting**](#5️⃣-setting-up-s3-for-static-hosting)

[**6️⃣ Using Terraform to Deploy the Website**](#6️⃣-using-terraform-to-deploy-the-website)

[**7️⃣ Setting Up CloudFront for HTTPS**](#7️⃣-setting-up-cloudfront-for-https)

[**8️⃣ Adding a CI/CD Pipeline**](#8️⃣-adding-a-cicd-pipeline)

[**9️⃣ Final Testing & Deployment**](#9️⃣final-testing--deployment)

## **1️⃣ Prerequisites**

Before starting, ensure you have the following:

- [x]  **AWS Account** ([Sign up here](https://aws.amazon.com/))
- [ ]  **IAM User with Required Permissions** (for Terraform & CLI access)
- [ ]  **Terraform Installed** (Download Terraform)
- [ ]  **AWS CLI Installed** ([Download AWS CLI](https://aws.amazon.com/cli/))
- [ ]  **Node.js Installed** ([Download Node.js](https://nodejs.org/))
- [x]  **React App Created** (**`npx create-react-app my-aws-app`**)

### **Verify Installations**

Check AWS CLI:

```jsx
aws --version
```

Check Terraform:

```jsx
terraform -version
```

Check Node.js:

```jsx
node -v
npm -v
```


## **2️⃣ Setting Up AWS & IAM**

1. **Create an IAM User:**
    - Go to [AWS IAM Console](https://console.aws.amazon.com/iam/home#/users)
    - Click **Add User** → Enter username (`terraform-user`)
    - Select **Programmatic Access**
    - Attach **AdministratorAccess** policy (or create a custom policy for S3, CloudFront, etc.)
    - Save **Access Key ID** and **Secret Access Key**
2. **Configure AWS CLI:**

```
aws configure
```

Provide:

- **Access Key ID**
- **Secret Access Key**
- **Default region** (e.g., `us-east-1`)
- **Output format** (`json`)

Verify access:
```jsx
aws s3 ls
```


## **3️⃣ Installing Terraform**

1. **Download & Install Terraform** (Official Guide)
2. **Verify Installation:**

```jsx
terraform —version
```


## **4️⃣ Preparing the React App**

1. **Navigate to your project folder:**

```
cd my-aws-app
```

1. **Build the project:**

```
npm run build
```

This creates a `build/` directory containing static files.


## **5️⃣ Setting Up S3 for Static Hosting**

1. **Manually Create S3 Bucket**:
    - []  Go to [AWS S3 Console](https://s3.console.aws.amazon.com/s3/home)
    - []  Click **Create Bucket**
    - []  **Enter a unique bucket name** (e.g., `my-resume-site`)
    - []  Uncheck **Block all public access**
    - []  Enable **Static Website Hosting** in **Properties**
    - []  Upload the `build/` files

OR

1. **Define the S3 Bucket in Terraform** (See next step)


## **6️⃣ Using Terraform to Deploy the Website**

### **Project Structure**

```
cloud-resume-terraform/
│── main.tf               # Main Terraform configuration
│── variables.tf          # Define variables
│── terraform.tfvars      # Store variable values
│── .gitignore            # Exclude sensitive files
│
└── my-react-app/         # React app folder
```

### **Initialize Terraform**

```
cd cloud-resume-terraform
terraform init
```

### **Example Terraform Configuration (`main.tf`)**

```
provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "website" {
  bucket = "my-resume-site"
  acl    = "public-read"
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_s3_bucket_policy" "website_policy" {
  bucket = aws_s3_bucket.website.id
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "${aws_s3_bucket.website.arn}/*"
    }
  ]
}
EOF
}
```

### **Deploy with Terraform**

```
terraform plan
terraform apply
```

## **7️⃣ Setting Up CloudFront for HTTPS**

```
resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id   = "S3-${aws_s3_bucket.website.id}"
  }

  enabled             = true
  default_root_object = "index.html"
  viewer_certificate {
    cloudfront_default_certificate = true
}
```

Apply changes:

```jsx
terraform apply
```


## **8️⃣ Adding a CI/CD Pipeline**

### **GitHub Actions Example**

Create `.github/workflows/deploy.yml`:

```
name: Deploy to S3
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Build React app
        run: npm run build
      - name: Deploy to S3
        run: aws s3 sync build/ s3://my-resume-site --delete
```


## **9️⃣ Final Testing & Deployment**

### **Verify Everything is Working**

1. Run `terraform apply` and confirm deployment.
2. Visit the **CloudFront URL** or **S3 Website URL**.
3. If needed, update the DNS (e.g., using Route 53 for a custom domain).

### **Destroy Resources (if needed)**

```jsx
terraform destroy
```