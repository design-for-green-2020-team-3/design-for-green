FROM node:14-alpine

WORKDIR /usr/src/app

COPY front/ ./

RUN  npm install

#COPY ./front/public ./public
ENV NODE_ENV=production
RUN npm run-script build 

EXPOSE 3000

ENV HOST=0.0.0.0

CMD [ "npm", "start" ]
