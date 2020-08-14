# specify the node base image with your desired version node:<version>
FROM node:lts-alpine

ENV PORT 80
EXPOSE $PORT

ARG COMMAND
ENV COMMAND $COMMAND

WORKDIR /home/node/app

COPY package.json package.json
RUN npm install

COPY . .

# RUN npm run build
RUN echo $COMMAND

CMD npm run $COMMAND