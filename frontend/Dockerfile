FROM node:20   
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 7656
CMD ["npm", "start"]