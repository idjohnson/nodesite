# pull official base image
FROM node:16.14.2-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY tsconfig.json ./
RUN npm install -g pnpm
RUN pnpm install

# add app
COPY . ./
RUN pnpm build

# start app
CMD ["pnpm", "start"]