import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { search } = req.query;

  if (!search) {
    res.status(400).json({ error: "Missing query parameters" });
    return;
  }

  try {
    const data = await prisma.player.findFirst({
      where: {
        username: search as string,
      },
    });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
}
