# tahap pengembangan
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Enable ketika run di linux
# RUN chmod -R +x node_modules/.bin
RUN npm run build

# tahap produksi
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]