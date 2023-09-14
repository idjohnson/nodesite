FROM node:16.14.2-alpine AS BUILD_IMAGE

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm

# install dependencies
RUN pnpm install
COPY . .

# ci check 
COPY biome.json ./
RUN pnpm biome ci ./src/

# build
RUN pnpm build
# remove dev dependencies
RUN pnpm prune --production

FROM node:16.14.2-alpine

WORKDIR /app

RUN npm install -g pnpm

# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public


EXPOSE 3000

# ENTRYPOINT ["tail", "-f", "/dev/null"]
CMD ["pnpm", "start"]