# Deployment Debug Guide

## Steps to Debug the Deployment

1. **Check if the site loads at all**
   - Visit your Vercel URL
   - Open browser developer tools (F12)
   - Check the Console tab for errors

2. **Test API endpoints directly**
   - Visit: `https://your-vercel-url.vercel.app/api/test`
   - Should return: `{"message":"Backend is working!","timestamp":"..."}`
   
   - Visit: `https://your-vercel-url.vercel.app/api/products`
   - Should return an array of products

3. **Check if static files are served**
   - Visit: `https://your-vercel-url.vercel.app/`
   - Should show the React app

4. **Common Issues and Solutions**

   **Issue: White screen**
   - Check browser console for JavaScript errors
   - Verify API endpoints are working
   - Check if React Router is working

   **Issue: API calls failing**
   - Verify the backend is deployed correctly
   - Check Vercel function logs
   - Ensure CORS is configured properly

   **Issue: Static files not loading**
   - Check if the build completed successfully
   - Verify the `vercel.json` routing configuration
   - Ensure the build directory structure is correct

5. **Vercel Dashboard Checks**
   - Go to your Vercel dashboard
   - Check the deployment logs
   - Verify both functions and static files are deployed
   - Check for any build errors

6. **Local Testing**
   - Test the build locally: `npm run build`
   - Serve the build: `npx serve frontend/build`
   - Test API locally: `npm start`

## Expected Behavior

- **Homepage**: Should show the e-commerce homepage with products
- **API**: `/api/products` should return product data
- **Navigation**: Should work between pages
- **Cart**: Should be functional

## Debug Commands

```bash
# Test build locally
npm run build

# Test API locally
npm start

# Check Vercel deployment
vercel ls

# View deployment logs
vercel logs
``` 