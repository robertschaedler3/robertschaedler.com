FROM node:12.13.0

# Create app directory
WORKDIR /usr/src/app

# add `usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install app dependencies
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@8.0.6

# Bundle app source
COPY . .

EXPOSE 8080
CMD ng serve --host 0.0.0.0