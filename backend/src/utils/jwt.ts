import jwt from 'jsonwebtoken';

const JWT_SECRET: string = process.env.JWT as string;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}

export function createJWT(user: {id: string, email: string}) {
    return jwt.sign({id: user.id, email: user.email}, JWT_SECRET, {expiresIn: "1d"});
}