FROM node:14-alpine

WORKDIR /app
COPY package.json .
RUN npm install
ADD . /app
RUN npm run build
# Start
CMD [ "npm", "start" ]
EXPOSE 3333
