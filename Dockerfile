FROM node:16.13.0
WORKDIR /app
COPY package.json . 
RUN npm install 
COPY index.js .
CMD ["node", "index.js"]