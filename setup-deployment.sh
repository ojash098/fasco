#!/bin/bash

# Deployment Setup Script
# This script helps set up the deployment environment

echo "🚀 Setting up deployment for Backend (Render) + Frontend (Vercel)"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📦 Installing dependencies..."
npm run install-all

echo "🔨 Building frontend..."
npm run build

echo "✅ Build completed successfully!"

echo ""
echo "📋 Next Steps:"
echo ""
echo "1. 🎯 Deploy Backend to Render:"
echo "   - Go to https://render.com"
echo "   - Create new Web Service"
echo "   - Connect your GitHub repository"
echo "   - Render will auto-detect render.yaml"
echo "   - Set environment variables:"
echo "     NODE_ENV=production"
echo "     FRONTEND_URL=https://your-vercel-url.vercel.app"
echo ""
echo "2. 🌐 Deploy Frontend to Vercel:"
echo "   - Install Vercel CLI: npm i -g vercel"
echo "   - Run: vercel"
echo "   - Set environment variable in Vercel dashboard:"
echo "     REACT_APP_API_URL=https://your-backend-url.onrender.com"
echo ""
echo "3. 🔗 Update URLs:"
echo "   - Update FRONTEND_URL in Render with your Vercel URL"
echo "   - Update REACT_APP_API_URL in Vercel with your Render URL"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
echo ""
echo "🎉 Happy deploying!" 