output "ecr_repository_url" {
  value = data.aws_ecr_repository.personal-website-repo.repository_url
}

output "container_definition" {
  value = templatefile("${path.module}/container_definition.json", {
    repository_url   = data.aws_ecr_repository.personal-website-repo.repository_url,
    recaptcha_secret = aws_ssm_parameter.personal-website_recaptcha_secret.arn,
    smtp_host        = aws_ssm_parameter.personal-website_smtp_host.arn,
    smtp_user        = aws_ssm_parameter.personal-website_smtp_user.arn,
    smtp_password    = aws_ssm_parameter.personal-website_smtp_password.arn,
    contact_email    = aws_ssm_parameter.personal-website_contact_email.arn
  })
}

output "secrets_arns" {
  value = [
    aws_ssm_parameter.personal-website_recaptcha_secret.arn,
    aws_ssm_parameter.personal-website_smtp_host.arn,
    aws_ssm_parameter.personal-website_smtp_user.arn,
    aws_ssm_parameter.personal-website_smtp_password.arn,
    aws_ssm_parameter.personal-website_contact_email.arn
  ]
}
