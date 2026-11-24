# SWYNEX Technologies — Task 2: Basic Cloud Deployment (AWS S3)

- **Intern Name:** Yogiraj Solanki
- **Intern ID:** SWX-APP-2026-C3794
- **Offer ID:** SWX-OFR-2026-5DC45
- **Domain:** Cloud & Emerging Technology
- **Cloud Provider:** Amazon Web Services (AWS)
- **S3 Bucket Name:** `yogiraj-swynex-portfolio-3157`
- **AWS Region:** Asia Pacific (Sydney) `ap-southeast-2`
- **Live AWS S3 Website URL:** http://yogiraj-swynex-portfolio-3157.s3-website-ap-southeast-2.amazonaws.com

---

## 1. Objective
Deploy a responsive static portfolio web application (`index.html`, `style.css`, `script.js`) on **Amazon Web Services (AWS)** using **Amazon S3 Static Website Hosting**, configure public read access permissions via a JSON Bucket Policy, and document the complete deployment architecture.

---

## 2. Cloud Architecture & Configuration Summary
- **Source Control:** GitHub (`yogirajsolanki3157-byte/SWYNEX-Task2-AWS-Deployment`)
- **Cloud Storage & Hosting:** Amazon S3 (`yogiraj-swynex-portfolio-3157` in `ap-southeast-2`)
- **Static Website Hosting:** Enabled with `index.html` configured as the root index document.
- **Security & Access Control:**
  - Turned **Off** *Block all public access* at the bucket level to allow public web traffic.
  - Attached a least-privilege JSON **Bucket Policy** granting read-only (`s3:GetObject`) access to public visitors.

---

## 3. Step-by-Step AWS Deployment Process

### Step 1: Project Files & Local Verification
Prepared the static portfolio files (`index.html`, `style.css`, and `script.js`) locally and verified relative asset paths in the browser.

### Step 2: Amazon S3 Bucket Provisioning & Object Upload
1. Created a globally unique S3 bucket named **`yogiraj-swynex-portfolio-3157`** in the `ap-southeast-2` region.
2. Uploaded `index.html`, `style.css`, and `script.js` directly into the root directory of the S3 bucket.

![S3 Bucket Objects](screenshots/01-s3-objects.png)

### Step 3: Enabling Static Website Hosting
1. Navigated to the **Properties** tab of the S3 bucket.
2. Enabled **Static website hosting** (Hosting type: *Bucket hosting*) and set **`index.html`** as the Index document.
3. Generated the public **Bucket website endpoint**:  
   `http://yogiraj-swynex-portfolio-3157.s3-website-ap-southeast-2.amazonaws.com`

![S3 Static Website Hosting](screenshots/02-s3-properties.png)

### Step 4: Configuring Public Access & Bucket Policy
1. Navigated to the **Permissions** tab and turned **Off** *Block public access (bucket settings)*.
2. Added the following JSON **Bucket Policy** to allow public read (`s3:GetObject`) access for website visitors:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForWebSiteFiles",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::yogiraj-swynex-portfolio-3157/*"
        }
    ]
}
