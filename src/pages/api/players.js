import prisma from '../../lib/prisma'

export default async function handler(req, res) {
     const { search, findone } = req.query;

     if (!search || !findone) {
       res.status(400).json({ error: 'Missing query parameters' });
       return;
     }
     if(findone) {
       const players = await prisma.player.findFirst({
            where: {
                 username: {
                      contains: search || "",
                 },
            },
       });
       res.json(players);
     } else {
       const players = await prisma.player.findMany({
            where: {
                 username: {
                      contains: search || "",
                 },
            },
       });
       res.json(players);
     }
}
