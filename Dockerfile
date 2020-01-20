# specify the node base image with your desired version node:<version>
FROM node:lts

# replace this with your application's default port
ENV PORT 8888

EXPOSE 8888

WORKDIR /home/node/app

RUN npm install --save -g typescript
RUN npm install --save -g ts-node
RUN npm install -g @vue/cli

COPY package.json package.json
RUN npm install

COPY . .

# RUN npm update --save-dev @types/node

# RUN npm run build

CMD ["npm", "run", "dev"]