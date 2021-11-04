FROM node:16.13.0
WORKDIR /app
COPY package.json . 
RUN npm install 
COPY src .
CMD ["node", "index.js"]