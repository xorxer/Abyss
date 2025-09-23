import { PrismaClient } from '../generated/prisma/index.js'
const prisma = new PrismaClient()

async function main() {
    try {
        console.log('Clearing existing data');
        await prisma.user.deleteMany();
        await prisma.conversation.deleteMany();
        await prisma.conversationMembership.deleteMany();
        await prisma.message.deleteMany();
        

    } catch (error) {
        console.error(error);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
