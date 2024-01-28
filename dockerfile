# Use an official Node.js LTS image as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install all dependencies needed to build the TypeScript project
RUN yarn install --frozen-lockfile

# Copy the entire project to the working directory
COPY . .

# Build the TypeScript project and output to the 'dist' folder
RUN yarn build

# Create a new image for production
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the 'dist' folder, package.json, and yarn.lock from the build image
COPY --from=0 /app/dist/src ./dist
COPY --from=0 /app/package.json .
COPY --from=0 /app/yarn.lock .

# Install only production dependencies
RUN yarn install --frozen-lockfile --production

# Expose the port the app will run on
EXPOSE 3000

# Define the command to run your application
CMD ["yarn", "start"]