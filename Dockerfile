# Create a new image from the base nodejs image.
FROM node:boron

# set the loglevel for npm with environment variable
ENV NPM_CONFIG_LOGLEVEL=warn
ENV CODECLIMATE_REPO_TOKEN=84cd73f56cf9c6c50036ecdae88350c4b2cf5e11f534332111b8d1e03ca720e1

# Install Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get -qq update && apt-get -qq install -y google-chrome-stable

# Create the target directory in the image.
RUN mkdir -p /usr/src/app
# Set the created directory as the working directory
WORKDIR /usr/src/app
# Copy the package.json inside the working directory
COPY . /usr/src/app
# Install required dependencies
RUN npm install --loglevel=warn

# Installing Bower
RUN npm install -g bower
WORKDIR /usr/src/app/src
RUN bower install --allow-root

# Back to app base dir
WORKDIR /usr/src/app

# Run Tests
RUN npm test

# Installing Code Climate
RUN npm install -g codeclimate-test-reporter
RUN codeclimate-test-reporter < coverage/lcov.info

# Open port 4200. This is the port that our development server uses
EXPOSE 4200
# Start the application. This is the same as running ng serve.
CMD ["npm", "start"]