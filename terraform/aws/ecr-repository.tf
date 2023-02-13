resource "aws_ecr_repository" "personal-website-repo" {
  name                 = "personal-website"
  image_tag_mutability = "MUTABLE"
}
