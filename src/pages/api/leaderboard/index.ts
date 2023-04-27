import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const players = await prisma.player.findMany({
      select: {
        username: true,
        level: true,
        exp: true,
      },
      orderBy: {
        level: "desc",
      },
      take: 15,
    });

    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  } finally {
    await prisma.$disconnect();
  }
}
