## Build container
FROM node:12.18.3-alpine3.11 as build
RUN apk update \
    && apk add --no-cache bash make

ADD . /root/workspace/personal-website
WORKDIR /root/workspace/personal-website

RUN make install

RUN make test

RUN make build

## Final container that holds the artifacts
FROM node:alpine3.11 
RUN apk update \
    && apk add --no-cache bash

# these are the peer dependencies defined in package.json in backend
RUN npm install antd@4.5.1 react@16.13.1 react-dom@16.13.1 axios@0.19.2 express@4.17.1 nodemailer@6.4.11 form-data@3.0.0

WORKDIR /home/personal-website

COPY --from=build /root/workspace/personal-website/backend/dist .
COPY --from=build /root/workspace/personal-website/frontend/build ./build

EXPOSE 80

ENTRYPOINT ["node", "./server.js"]