// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export default async (req, res) => {
  res
    .status(200)
    .json({ name: "John Doe", user: await client.user.findMany({}) });
};
