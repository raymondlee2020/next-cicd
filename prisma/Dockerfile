FROM node:alpine AS builder
WORKDIR /app
COPY . .
CMD ["npx", "prisma", "migrate", "deploy"]