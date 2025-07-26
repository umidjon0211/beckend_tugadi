FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 4664

CMD ["npm", "run", "start:prod"]
