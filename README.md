Task Manager AWS Deployment
Overview
A cloud-native task management application with a React frontend, Node.js backend, PostgreSQL database, and S3 storage, deployed on AWS using Elastic Beanstalk, EC2, RDS, and S3.
Prerequisites

AWS Account (Free Tier)
Node.js, npm
Docker
Git

Project Structure

backend/: Node.js/Express backend with Docker.
frontend/: React frontend.
docs/: Architecture diagram, submission PDF.

Deployment Guide

Clone Repository:git clone https://github.com/Afkayyy/task-manager-aws
cd task-manager-aws


Backend Setup:
Navigate: cd backend.
Install: npm install.
Create .env with RDS, S3, JWT details (see .env.example).
Build: docker build -t task-manager-backend ..
Deploy to EC2.


Frontend Setup:
Navigate: cd frontend.
Install: npm install.
Update src/App.js with EC2 URL.
Build: npm run build.
ZIP: zip -r frontend.zip build/.
Deploy to Elastic Beanstalk.


AWS Configuration:
VPC: task-manager-vpc-<your-name>, CIDR 10.0.0.0/16.
Subnets: 10.0.100.0/24 (us-east-1a), 10.0.101.0/24 (us-east-1b).
IAM Roles: EC2 and Elastic Beanstalk roles.
Security Groups: EC2 (HTTP:80, SSH:22), RDS (PostgreSQL:5432), Elastic Beanstalk (HTTP:80).
RDS: PostgreSQL, public access.
S3: Public read bucket.
EC2: Dockerized backend.
Elastic Beanstalk: Frontend.
Route 53 (Bonus): Custom domain.



Live Demo URLs

Frontend: http://task-manager-env-.us-east-1.elasticbeanstalk.com
Backend: http://

Architecture
See docs/architecture-diagram.png.
Security

Least-privilege IAM policies.
Restricted Security Groups.
HTTPS via ACM/ALB (optional).

Troubleshooting

Verify RDS endpoint.
Check Security Group rules.
Review Elastic Beanstalk logs.

