FROM node:alpine AS builder
RUN apk add --no-cache curl
WORKDIR /app
COPY . .
CMD ["npx", "prisma", "migrate", "deploy"]