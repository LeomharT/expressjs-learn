FROM node:latest
COPY . /app
COPY ./.env.production /app/.env
WORKDIR /app
RUN npm install
EXPOSE 3006
CMD ["npm", "run", "serve"]