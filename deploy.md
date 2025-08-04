# Vercel Deployment Guide

## Prerequisites
1. Install Vercel CLI: `npm i -g vercel`
2. Make sure you have a Vercel account

## Deployment Steps

1. **Install dependencies:**
   ```bash
   npm run install-all
   ```

2. **Build the project locally to test:**
   ```bash
   npm run build
   ```

3. **Deploy to Vercel:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Link to existing project or create new
   - Set project name
   - Confirm deployment

## Configuration

The project is configured with:
- **Backend**: Node.js serverless function at `/api/*`
- **Frontend**: Static React build served at root
- **Routes**: API calls routed to backend, everything else to frontend

## Troubleshooting

If deployment fails:
1. Check that all dependencies are installed
2. Ensure the build process completes successfully
3. Verify the `vercel.json` configuration
4. Check Vercel logs for specific errors

## Environment Variables

No environment variables are required for this basic setup, but you can add them in the Vercel dashboard if needed.

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get specific product
- `GET /api/testimonials` - Get testimonials
- `GET /api/cart` - Get cart
- `POST /api/cart` - Add to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart
- `DELETE /api/cart` - Clear cart
- `GET /api/health` - Health check 