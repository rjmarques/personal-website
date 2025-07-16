# Personal Website

https://ricardomarques.dev

## Built using

- React (and the create-react-app)
- Typescript
- Antd

_Automatically deployed using CircleCI into my ECS Cluster - see this [repo](https://github.com/rjmarques/my-ecs-cluster)_

## Build locally

```bash
make
```

The following folders will contain the built artifacts:

- _./front/build_
- _./backend/dist_

## Run locally

Before running ensure you have the following env vars are available:

- RECAPTCHA_SECRET - Google Recaptcha V2 server side api secret
- CONTACT_EMAIL - Email to where the website sends contact messages
- SMTP_HOST - The URL of the SMTP server that delivers our emails
- SMTP_USER - SMTP auth username
- SMTP_PASS - SMTP auth password

If so, run:

```bash
make run
```

It automatically points the server's to the frontend's build folder.

## Build in Docker

```bash
make build_image
```

New image will be available as - `rjmarques/personal-website`

## Run in Docker

Assuming all the env vars are available, as previously defined.

```bash
make run_container
```

## Deploy to ECS

Deployment builds on my _[ECS repo](https://github.com/rjmarques/my-ecs-cluster)_, to provide an ESC cluster that hosts this web app. Moreover, this step assumes all the terraform infrastructure is already provisioned.

To deploy this image to ECS run:

```bash
make deploy
```
