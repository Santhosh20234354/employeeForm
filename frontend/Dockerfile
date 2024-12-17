# Stage 1: Build React app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy React source code and build
COPY . .
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:latest

# Copy build output to Nginx's default HTML directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
