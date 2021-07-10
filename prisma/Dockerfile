FROM node:alpine AS builder
COPY . .
CMD ["npx", "prisma", "migrate", "deploy"]