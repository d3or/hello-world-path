FROM --platform=linux/amd64 node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "index.js" ]