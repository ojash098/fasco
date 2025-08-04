# Deployment Guide: Backend on Render + Frontend on Vercel

## Overview
This setup deploys the backend API on Render and the frontend React app on Vercel.

## Backend Deployment (Render)

### 1. Prepare Backend
The backend is already configured with:
- `render.yaml` for Render deployment
- CORS configured to accept requests from frontend
- Environment variables for production
- Proper start command using `npm start`

### 2. Deploy to Render

1. **Sign up/Login to Render** (https://render.com)

2. **Create New Web Service**
   - Connect your GitHub repository
   - Select the repository
   - Render will auto-detect the `render.yaml` configuration

3. **Configure Environment Variables** (in Render dashboard):
   ```
   NODE_ENV=production
   PORT=10000
   FRONTEND_URL=https://your-vercel-frontend-url.vercel.app
   ```

4. **Deploy**
   - Render will automatically build and deploy
   - Note the backend URL (e.g., `https://your-app.onrender.com`)

### 3. Test Backend
Visit your backend URL to test:
- `https://your-app.onrender.com/api/test`
- `https://your-app.onrender.com/api/products`

## Frontend Deployment (Vercel)

### 1. Set Environment Variable
Before deploying, set the backend URL:
```bash
# In your project root
echo "REACT_APP_API_URL=https://your-backend-url.onrender.com" > frontend/.env
```

### 2. Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Link to existing project or create new
   - Set project name
   - Confirm deployment

### 3. Update Environment Variable
After deployment, update the environment variable in Vercel dashboard:
- Go to your Vercel project settings
- Add environment variable:
  - **Name**: `REACT_APP_API_URL`
  - **Value**: `https://your-backend-url.onrender.com`

## Configuration Files

### Backend (Render)
- `render.yaml` - Render deployment configuration
- `backend/server.js` - Express server with CORS configuration
- `package.json` - Contains `npm start` script for Render

### Frontend (Vercel)
- `vercel.json` - Vercel deployment configuration
- `frontend/src/config.js` - API URL configuration
- `frontend/.env` - Environment variables

## Environment Variables

### Backend (Render)
```env
NODE_ENV=production
PORT=10000
FRONTEND_URL=https://your-vercel-frontend-url.vercel.app
```

### Frontend (Vercel)
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

## Testing

### 1. Test Backend
```bash
# Test API endpoints
curl https://your-backend-url.onrender.com/api/test
curl https://your-backend-url.onrender.com/api/products
```

### 2. Test Frontend
- Visit your Vercel URL
- Check browser console for any errors
- Test all functionality (products, cart, etc.)

## Troubleshooting

### Backend Issues
1. **Module not found errors**: The `render.yaml` now uses `npm start` which correctly points to `backend/server.js`
2. **CORS errors**: Check `FRONTEND_URL` environment variable
3. **API not responding**: Check Render logs
4. **Build failures**: Check `render.yaml` configuration

### Frontend Issues
1. **API calls failing**: Check `REACT_APP_API_URL` environment variable
2. **White screen**: Check browser console for errors
3. **Build failures**: Check Vercel build logs

### Common Issues
1. **Environment variables not set**: Make sure to set them in both Render and Vercel dashboards
2. **CORS issues**: Ensure backend CORS is configured for your frontend URL
3. **API URL mismatch**: Double-check the backend URL in frontend environment variables

## Local Development

### Backend
```bash
npm start
# Backend runs on http://localhost:5000
```

### Frontend
```bash
cd frontend
npm start
# Frontend runs on http://localhost:3000
```

### Environment Variables (Local)
Create `frontend/.env.local`:
```env
REACT_APP_API_URL=http://localhost:5000
```

## Benefits of This Setup

1. **Separation of Concerns**: Backend and frontend are independent
2. **Scalability**: Each service can scale independently
3. **Cost Effective**: Free tiers on both platforms
4. **Performance**: CDN for frontend, dedicated backend
5. **Flexibility**: Easy to switch providers or add more services

## API Endpoints

- `GET /api/test` - Test endpoint
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get specific product
- `GET /api/testimonials` - Get testimonials
- `GET /api/cart` - Get cart
- `POST /api/cart` - Add to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart
- `DELETE /api/cart` - Clear cart
- `GET /api/health` - Health check 