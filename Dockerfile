# Stage 1: Build the Astro project
FROM node:18-alpine AS app

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

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000
CMD ["node", "/app/dist/server/entry.mjs"]

