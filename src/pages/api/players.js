import prisma from '../../lib/prisma'

export default async function handler(req, res) {
     const { search } = req.query;
     const players = await prisma.player.findFirst({
          where: {
               username: {
                    contains: search || "",
               },
          },
     });
     res.json(players);
}