# Deployment Guide

## Recommended Options

### Option 1: Vercel

Best for:
- Fast setup
- Managed hosting
- Easy previews

Steps:
1. Push the project to GitHub.
2. Create a new Vercel project.
3. Import the repository.
4. Set the framework to Next.js.
5. Add the production domain.
6. Run the first deployment.

Approval-gated actions:
- Connecting the production domain
- Changing DNS records
- Going live on the final domain

### Option 2: VPS with Docker

Best for:
- More control
- Room for future backend additions
- Broader hosting flexibility

Steps:
1. Create a VPS instance.
2. Install Node.js or Docker.
3. Copy the project to the server.
4. Install dependencies with `npm install`.
5. Build with `npm run build`.
6. Run with `npm run start`.
7. Put Nginx in front with SSL.

Approval-gated actions:
- Production server changes
- Nginx edits
- SSL and domain configuration
- Service restarts on the live environment

## Suggested Production Checklist

- Finalize brand name, logo, and contact details
- Replace placeholder copy and project examples
- Connect the forms to email or CRM
- Add analytics and Search Console
- Add real legal pages
- Test mobile layouts and form submissions
- Confirm SEO metadata and page titles
