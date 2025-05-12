# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build TypeScript
RUN npm run build

# Start the app
CMD ["node", "dist/server.js"]
