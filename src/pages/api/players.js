import prisma from '../../lib/prisma'

export default async function handler(req, res) {
     const { search, findone } = req.query;

     if(!search) return res.send("Search query required!")
     if(findone === true ) {
       const players = await prisma.player.findFirst({
            where: {
                 username: {
                      contains: search || "",
                 },
            },
       });
       res.json(players);
     } else if(findone === false) {
       const players = await prisma.player.findMany({
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
     };
}
