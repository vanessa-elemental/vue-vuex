# STEP 1: BUILD PROJECT

FROM node:12.18.1-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


# STEP 2: CREATE NGINX SERVER

FROM nginx:1.19.0-alpine AS prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
#CMD ("/usr/sbin/nginx", "-g", "daemon off;")
#CMD ("-g", "daemon off;")
