FROM node:alpine
RUN apk add --no-cache curl
COPY . .
CMD ["npx", "prisma", "migrate", "deploy"]