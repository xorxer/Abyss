import { PrismaClient } from '../generated/prisma/index.js'
const prisma = new PrismaClient()
import { seedData } from './seedData.js';

async function main() {
    try {
        console.log('Clearing existing data');
        await prisma.user.deleteMany();
        await prisma.conversation.deleteMany();
        await prisma.conversationMembership.deleteMany();
        await prisma.message.deleteMany();
        
        console.log('Creating users');
        for (const user of seedData.users) {
            await prisma.user.create({
                data: user
            });
        }
        console.log(`Created ${seedData.users.length} users`);
        
        console.log('Creating conversations...');
        for (const conversation of seedData.conversations) {
            await prisma.conversation.create({
                data: conversation
            });
        }
        console.log(`Created ${seedData.conversations.length} conversations`);
        
        console.log('Creating conversation memberships...');
        for (const membership of seedData.memberships) {
            await prisma.conversationMembership.create({
                data: membership
            });
        }
        console.log(`Created ${seedData.memberships.length} memberships`);
        
        console.log('Creating messages...');
        for (const message of seedData.messages) {
            await prisma.message.create({
                data: message
            });
        }
        console.log(`Created ${seedData.messages.length} messages`);
        console.log('Database seeded successfully!');

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
