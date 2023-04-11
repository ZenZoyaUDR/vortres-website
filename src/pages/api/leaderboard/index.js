import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  try {
    const players = await prisma.player.findMany({
      select: {
        username: true,
        level: true,
      },
      orderBy: {
        level: 'desc',
      };
      take: 10,
    });
}
