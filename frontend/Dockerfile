# Use latest version of Node as a parent image
FROM node:lts-alpine as builder
RUN apk add --no-cache ca-certificates git bash
# Set the working directory to /api
WORKDIR /app
# copy package.json into the container at /api
COPY package.json ./
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /api
COPY . .
## Launch the wait tool and then your application
RUN npm run build



FROM nginx:alpine
COPY --from=builder /app/build/ /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .
RUN apk add --no-cache bash
RUN chmod +x env.sh
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]