# specify the node base image with your desired version node:<version>
FROM node:10
# replace this with your application's default port
EXPOSE 8888

WORKDIR /home/design_patterns

COPY . .

RUN npm install

ENTRYPOINT ["node", "app.js"]