resource "aws_ssm_parameter" "personal-website_recaptcha_secret" {
  name        = "/production/personal-website/database/db_url"
  description = "PG connection URL"
  type        = "SecureString"
  value       = var.postgres_url

  tags = {
    environment = "production"
  }
}

resource "aws_ssm_parameter" "personal-website_smtp_host" {
  name        = "/production/personal-website/smtp/smtp_host"
  description = "SMTP host URL"
  type        = "String"
  value       = var.smtp_host

  tags = {
    environment = "production"
  }
}

resource "aws_ssm_parameter" "personal-website_smtp_user" {
  name        = "/production/personal-website/smtp/smtp_user"
  description = "SMTP auth user"
  type        = "SecureString"
  value       = var.smtp_user

  tags = {
    environment = "production"
  }
}

resource "aws_ssm_parameter" "personal-website_smtp_password" {
  name        = "/production/personal-website/smtp/smtp_password"
  description = "SMTP auth password"
  type        = "SecureString"
  value       = var.smtp_password

  tags = {
    environment = "production"
  }
}

resource "aws_ssm_parameter" "personal-website_contact_email" {
  name        = "/production/personal-website/email/contact_email"
  description = "Contact email"
  type        = "SecureString"
  value       = var.contact_email

  tags = {
    environment = "production"
  }
}
