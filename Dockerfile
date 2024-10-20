# Stage 1: Build the Astro project
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Astro project (output will go to /app/dist)
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine AS production

# Set environment variable for production
ENV NODE_ENV=production

# Copy custom nginx config file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built static files from the previous build stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 3000 (the custom port for nginx to serve on)
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
