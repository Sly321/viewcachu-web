#  Create a new image from the base nodejs 7 image.
FROM node:7
# Create the target directory in the imahge
RUN mkdir -p /usr/src/app
# Set the created directory as the working directory
WORKDIR /usr/src/app
# Copy the package.json inside the working directory
COPY . /usr/src/app
# Install required dependencies
RUN npm install

# Installing Bower
RUN npm install -g bower
WORKDIR /usr/src/app/src
RUN bower install --allow-root

# Back to app base dir
WORKDIR /usr/src/app/src

# Run Tests
CMD ["npm", "test"]

# Open port 4200. This is the port that our development server uses
EXPOSE 4200
# Start the application. This is the same as running ng serve.
CMD ["npm", "start"]