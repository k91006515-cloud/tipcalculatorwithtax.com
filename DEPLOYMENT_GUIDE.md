# Deploy to Cloudflare Pages

## Recommended for: tipcalculatorwithtax.com

This Astro tip calculator site is best deployed on **Cloudflare Pages** because:
- Static site optimization
- Simple git-based deployment
- Free tier includes generous bandwidth
- Built-in form handling if needed

## Steps

1. **Push to GitHub**
   - Push your code to a GitHub repository

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/pages)
   - Click "Create a project" → "Connect to Git"
   - Select your `tipcalculatorwithtax.com` repository

3. **Build Settings** (auto-detected):
   - Framework Preset: **Astro**
   - Build Command: `npm run build`
   - Build Output Directory: `dist`
   - Framework Version: Auto-detect

4. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will auto-deploy on each push to main

5. **Custom Domain** (optional):
   - In Cloudflare Pages project → "Domain"
   - Add `tipcalculatorwithtax.com`
   - Follow DNS verification steps

## Why Pages over Workers for this site

| Feature | Cloudflare Pages | Cloudflare Workers |
|---------|-----------------|-------------------|
| Static sites | ⭐⭐⭐⭐⭐ Optimal | ⭐⭐ Requires config |
| Form handling | ⭐⭐⭐⭐ Built-in | ⭐⭐ Requires Workers |
| Setup complexity | ⭐⭐⭐ Simple | ⭐⭐⭐⭐⭐ More complex |
| Your site type | Perfect fit | Overkill |

## Post-Deployment

- Visit your site at the assigned `.pages.dev` URL
- Configure custom domain in Cloudflare dashboard
- Enable HTTPS (automatic with Cloudflare)