# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port (same as in .env)
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
