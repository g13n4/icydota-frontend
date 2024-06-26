# Build step #1: build the React front end
FROM node:current-alpine3.18 as front
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app/ 
RUN npm install --force && npm run build
