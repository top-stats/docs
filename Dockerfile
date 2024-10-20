# Stage 1: Build the Astro site
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Astro static site
RUN npm run build

# Stage 2: Serve the built site with Caddy
FROM caddy:2-alpine

# Set working directory
WORKDIR /srv

# Copy the built static files from the previous stage
COPY --from=build /app/dist /srv

# Copy the Caddyfile (if you want custom Caddy configurations)
COPY Caddyfile /etc/caddy/Caddyfile

# Expose port 80
EXPOSE 8080

# Start Caddy (default configuration serves static files from /srv)
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
