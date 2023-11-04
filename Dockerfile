FROM node:alpine
WORKDIR /app
COPY ./package.json  ./
RUN npm install
COPY . .
EXPOSE 8181
CMD [ "npm", "start" ]
