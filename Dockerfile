# Create image based on the official Node 6 image from dockerhub
FROM node:10

ARG APP_DIR
ENV APP_DIR=$APP_DIR

# Create a directory where our app will be placed
RUN mkdir -p $APP_DIR/

# Copy dependency definitions
WORKDIR $APP_DIR

COPY ./package.json $APP_DIR/

# Install dependecies
RUN npm install

VOLUME $APP_DIR/node_modules

# Get all the code needed to run the app
COPY . $APP_DIR/

VOLUME $APP_DIR/node_modules

# Expose the port the app runs in
EXPOSE 4100

# Serve the app
CMD ["npm", "start"]