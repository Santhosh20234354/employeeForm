# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all backend code
COPY . .

# Expose port 5000 for Express
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
