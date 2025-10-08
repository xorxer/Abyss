import bcrypt from 'bcrypt';

// Generate hashed password once
const defaultPasswordHash = bcrypt.hashSync('defaultpass1*', 10);

interface SeedUser {
    id: number;
    email: string;
    name: string;
    username: string;
    pfp: string;
    password: string;
}

interface SeedConversation {
    id: number;
    type: string;
    name: string | null;
}

interface SeedMembership {
    userId: number;
    conversationId: number;
    role: string | null;
}

interface SeedMessage {
    conversationId: number;
    senderId: number;
    content: string;
}

interface SeedData {
    users: SeedUser[];
    conversations: SeedConversation[];
    memberships: SeedMembership[];
    messages: SeedMessage[];
}

export const seedData: SeedData = {
    users: [
        {
            id: 1,
            email: 'user1@example.com',
            name: 'User One',
            username: 'user1',
            pfp: '',
            password: defaultPasswordHash
        },
        {
            id: 2,
            email: 'user2@example.com',
            name: 'User Two',
            username: 'user2',
            pfp: '',
            password: defaultPasswordHash
        },
        {
            id: 3,
            email: 'user3@example.com',
            name: 'User Three',
            username: 'user3',
            pfp: '',
            password: defaultPasswordHash
        },
        {
            id: 4,
            email: 'user4@example.com',
            name: 'User Four',
            username: 'user4',
            pfp: '',
            password: defaultPasswordHash
        },
        {
            id: 5,
            email: 'user5@example.com',
            name: 'User Five',
            username: 'user5',
            pfp: '',
            password: defaultPasswordHash
        }
    ],

    conversations: [
        {
            id: 1,
            type: 'direct',
            name: null
        },
        {
            id: 2,
            type: 'direct',
            name: null
        },
        {
            id: 3,
            type: 'group',
            name: 'General Chat'
        },
        {
            id: 4,
            type: 'group',
            name: 'Project Team'
        },
        {
            id: 5,
            type: 'group',
            name: 'Team Chat'
        }
    ],

    memberships: [
        // Direct conversation 1: User 1 and User 2
        { userId: 1, conversationId: 1, role: null },
        { userId: 2, conversationId: 1, role: null },

        // Direct conversation 2: User 3 and User 4
        { userId: 3, conversationId: 2, role: null },
        { userId: 4, conversationId: 2, role: null },

        // Group conversation 1: General Chat (User 1, 2, 5)
        { userId: 1, conversationId: 3, role: 'admin' },
        { userId: 2, conversationId: 3, role: 'member' },
        { userId: 5, conversationId: 3, role: 'member' },

        // Group conversation 2: Project Team (User 1, 3, 4)
        { userId: 1, conversationId: 4, role: 'member' },
        { userId: 3, conversationId: 4, role: 'member' },
        { userId: 4, conversationId: 4, role: 'admin' },

        // Group conversation 3: Team Chat (All users)
        { userId: 1, conversationId: 5, role: 'member' },
        { userId: 2, conversationId: 5, role: 'member' },
        { userId: 3, conversationId: 5, role: 'admin' },
        { userId: 4, conversationId: 5, role: 'member' },
        { userId: 5, conversationId: 5, role: 'member' }
    ],

    messages: [
        // Direct conversation 1
        {
            conversationId: 1,
            senderId: 1,
            content: 'Hello there!'
        },
        {
            conversationId: 1,
            senderId: 2,
            content: 'Hi! How are you?'
        },
        {
            conversationId: 1,
            senderId: 1,
            content: 'I am doing well, thanks for asking.'
        },

        // Direct conversation 2
        {
            conversationId: 2,
            senderId: 3,
            content: 'Did you see the update?'
        },
        {
            conversationId: 2,
            senderId: 4,
            content: 'Yes, I saw it earlier today.'
        },

        // Group conversation 1 - General Chat
        {
            conversationId: 3,
            senderId: 1,
            content: 'Welcome everyone to the general chat!'
        },
        {
            conversationId: 3,
            senderId: 2,
            content: 'Thanks for setting this up.'
        },
        {
            conversationId: 3,
            senderId: 5,
            content: 'Great to be here!'
        },
        {
            conversationId: 3,
            senderId: 1,
            content: 'Feel free to share any updates here.'
        },

        // Group conversation 2 - Project Team
        {
            conversationId: 4,
            senderId: 1,
            content: 'Let us discuss the project requirements.'
        },
        {
            conversationId: 4,
            senderId: 3,
            content: 'I have prepared some notes.'
        },
        {
            conversationId: 4,
            senderId: 4,
            content: 'Should we schedule a meeting?'
        },

        // Group conversation 3 - Team Chat
        {
            conversationId: 5,
            senderId: 1,
            content: 'Welcome to the team chat.'
        },
        {
            conversationId: 5,
            senderId: 2,
            content: 'Happy to be part of the team.'
        },
        {
            conversationId: 5,
            senderId: 3,
            content: 'Looking forward to working together.'
        },
        {
            conversationId: 5,
            senderId: 5,
            content: 'When is the next team meeting?'
        },
        {
            conversationId: 5,
            senderId: 1,
            content: 'I will send out a meeting invite soon.'
        }
    ]
};