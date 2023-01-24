FROM node:alpine3.16
WORKDIR /visitor_count_app
COPY . .
RUN npm install
EXPOSE 7575
CMD ["npx", "nodemon"]