# Stage 1: Build the Astro project
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json if present
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Astro project
RUN npm run build

# Stage 2: Serve with Busybox HTTPd
FROM busybox:stable AS production

# Set environment variable to force the server to use port 3000
ENV PORT=3000

# Copy the built files from the previous stage
COPY --from=builder /app/dist /var/www

# Expose port 3000
EXPOSE 3000

# Start Busybox HTTPd server on port 3000, serving files from /var/www
CMD ["httpd", "-f", "-p", "3000", "-h", "/var/www"]
