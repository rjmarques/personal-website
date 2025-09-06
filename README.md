# Personal Website

https://ricardomarques.dev

## Built using

- Next.js
- React
- TypeScript
- Material-UI
- Sass

Automatically deployed using Github actions to Cloudflare workers.

## Build locally

```bash
npm run build
```

The following folder will contain the built artifacts:

- _./out_

## Run locally

```bash
npm run dev
```

It automatically starts the development server on [http://localhost:3000](http://localhost:3000).

## Test

Run the snapshot tests:

```bash
npm test
```

Update snapshots when making intentional changes:

```bash
npm test -- --updateSnapshot
```
