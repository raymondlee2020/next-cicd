FROM node:alpine AS builder
RUN apk add --no-cache curl
WORKDIR /app
COPY . .
RUN ls
CMD ["npx", "prisma", "migrate", "deploy"]