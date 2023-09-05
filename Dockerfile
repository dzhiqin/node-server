FROM node:16.16.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install pm2 -g
RUN npm install 
COPY . .
EXPOSE 8080
CMD ["npm","start"]