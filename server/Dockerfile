# 1. Install dependencies and ebuild the source code only when needed
FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. Production image, copy all the files and run nest
FROM node:16-alpine AS runner
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/main"]