# Build step #1: build the React front end
FROM node:current-alpine3.18 as front
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./icydota-frontend/ /app/ 
RUN npm install --force
RUN npm run build
