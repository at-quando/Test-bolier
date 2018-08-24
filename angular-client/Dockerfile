# Create image based on the official Node 6 image from dockerhub
FROM node:10

# Create a directory where our app will be placed
RUN mkdir -p /front-end

# Copy dependency definitions
WORKDIR /front-end

COPY package.json /front-end

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /front-end

# Expose the port the app runs in
EXPOSE 4100

# Serve the app
CMD ["npm", "start"]