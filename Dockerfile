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

# Stage 2: Use 'serve' to host the build
FROM node:18-alpine AS production

# Set environment variable to force Astro to use port 3000
ENV PORT=3000

# Install 'serve' globally to serve the static files
RUN npm install -g serve

# Set the working directory for production
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Use 'serve' to serve the built files from the 'dist' folder
CMD ["serve", "-s", "dist", "-l", "3000"]
