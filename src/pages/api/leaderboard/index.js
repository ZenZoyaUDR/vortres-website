import prisma from '../../../lib/prisma';
import limiter from '../../../lib/ratelimit';

export default async function handler(req, res) {
  limiter(req, res, () => {
    try {
      const players = prisma.player.findMany({
        select: {
          username: true,
          level: true,
          exp: true,
        },
        orderBy: {
          level: 'desc',
        },
        take: 10,
      });

      res.status(200).json(players);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      prisma.$disconnect();
    }
  });
}
