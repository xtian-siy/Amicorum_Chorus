# Amicorum Chorus

Responsive multi-page website for Amicorum Chorus, built with React and Vite.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

The production build is written to `dist/`.

## Deployment

The project is configured for Vercel. `vercel.json` rewrites browser routes such as `/about` and `/events` to the React entry point.

When this directory is the Git repository root, select `./` as the Vercel Root Directory. If the parent `Amicorum_Chorus` directory is the repository root, select `ac-client` instead.

No environment variables are currently consumed by the application.
