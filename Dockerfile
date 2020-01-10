# specify the node base image with your desired version node:<version>
FROM node:13

# replace this with your application's default port
ENV PORT 8888

EXPOSE 8888

WORKDIR /home/node/app

COPY package.json package.json
RUN npm install

COPY . .

# RUN npm install --save -g typescript

# RUN npm update --save-dev @types/node

# RUN npm run build

CMD ["npm", "run", "dev"]