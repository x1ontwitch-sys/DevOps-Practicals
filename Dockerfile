FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
expose 3123
# Use node directly instead of npm start
CMD ["node", "index.js"]