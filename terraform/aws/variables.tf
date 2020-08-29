## aws region
variable "region" {
  description = "AWS region"
}

## Recatpcha secret
variable "recaptcha_secret" {
  description = "Server side secret to communicate with my recaptcha account"
}

## SMTP parameters
variable "smtp_host" {
  description = "SMTP server URL"
}

variable "smtp_user" {
  description = "SMTP auth username"
}

variable "smtp_password" {
  description = "SMTP auth password"
}

## Contact email
variable "contact_email" {
  description = "To where emails send via the website go"
}
