import prisma from '../../lib/prisma'

export default async function handler(req, res) {
     const players = await prisma.player.findMany()
     res.status(200).json(players)
}