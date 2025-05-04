# Stage 1: Build the Astro project
FROM node:22-alpine AS app

# Set the working directory inside the container
WORKDIR /app

# Copy all project files
COPY . .

# Install dependencies
RUN npm install

# Build the Astro project (output will go to /app/dist)
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000
CMD ["npm", "start"]

