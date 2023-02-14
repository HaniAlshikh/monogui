FROM node:alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN apk add --no-cache make bash curl protoc


COPY . /app
RUN make react-install-ci
RUN PROTOC=protoc make react-build


FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY build/deploy/setup/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]