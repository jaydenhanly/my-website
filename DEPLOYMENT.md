# Deployment & Infrastructure

## Hosting

**Primary:** Vercel (vercel.com)
- Automatic deployments from main branch
- Preview deployments for PRs
- Edge functions support (optional future)
- Built-in performance monitoring

## Deployment Process

### Development
1. Work on feature branch
2. Commit and push to GitHub
3. Vercel auto-builds preview deployment
4. Test preview URL
5. Create pull request with preview link

### Staging
- Preview URLs serve as staging environment
- Accessible to anyone with link
- Ephemeral (deleted when PR closes)

### Production
1. Merge PR to `main` branch
2. Vercel auto-builds production deployment
3. Runs tests (optional, if configured)
4. Deploys to production
5. Available at mysite.com (custom domain TBD)

### Rollback
- Revert commit and push
- Vercel redeploys automatically
- Or manually redeploy previous build from Vercel dashboard

## Environment Variables

### Development (.env.local)
```
# Add as needed
```

### Production (Vercel Dashboard)
- Set in Vercel project settings → Environment Variables
- Available as `process.env.*` in Next.js

### Secrets
- Never commit `.env.local` or sensitive values
- Always store in Vercel dashboard or `.env.local` (gitignored)

## Database (If Needed)

**Current:** None (static site)
**Future options:**
- Supabase (PostgreSQL + Auth + Realtime)
- Vercel Postgres
- MongoDB Atlas
- PlanetScale (MySQL)

## Email Service (For Contact Form)

**Current:** TBD
**Options:**
- SendGrid
- Resend (recommended for Next.js)
- Mailgun
- AWS SES

## CI/CD

### GitHub Actions (Optional)
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm run lint (if configured)
      - run: npm run test (if configured)
```

## Performance Monitoring

### Vercel Analytics
- Enabled by default
- Tracks Core Web Vitals
- Accessible in Vercel dashboard

### Custom Monitoring (Optional)
- Plausible Analytics (privacy-focused)
- Google Analytics (if preferred)
- Vercel Web Analytics

## Domain Setup

**Current:** TBD (Vercel's default: *.vercel.app)
**Production Domain:** TBD
**Setup steps:**
1. Purchase domain (Namecheap, GoDaddy, etc.)
2. Point DNS to Vercel nameservers
3. Add domain in Vercel project settings
4. Configure SSL (automatic)

## Backup & Recovery

### Git History
- Main source of truth
- GitHub automatically backs up
- Can recover any previous commit

### Vercel Deployments
- Each deployment is preserved
- Can rollback to any previous deployment
- Access via Vercel dashboard

## Security Headers

Vercel automatically sets:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### Custom Headers (if needed)
Add to `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Custom-Header', value: 'value' }
      ],
    },
  ]
}
```

## Deployment Checklist

Before merging to main:
- [ ] Tests pass (if configured)
- [ ] Lint passes
- [ ] Preview deployment works
- [ ] Manual testing in preview
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Accessibility check (WCAG AA)
- [ ] Performance acceptable (Lighthouse 90+)

## Troubleshooting

### Build Fails
- Check Vercel build logs
- Verify dependencies in package.json
- Check for TypeScript errors
- Ensure all environment variables are set

### Slow Performance
- Check Core Web Vitals in Vercel Analytics
- Run Lighthouse audit
- Check image optimization
- Review bundle size

### Form Submission Fails
- Check email service configuration
- Verify Server Action code
- Check network requests in DevTools
- Look for error logs in Vercel
