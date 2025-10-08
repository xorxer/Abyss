import prisma from "../../../config/db.js";
import { comparePasswords, hashPasword } from "../../utils/hash.js";
import { createJWT } from "../../utils/jwt.js";
import type { LoginDTO, RegisterDTO } from "./auth.types.js";

export async function registerUser({ email, name, username, password }: RegisterDTO) {
    const hashed = await hashPasword(password);
    const user = await prisma.user.create({ data: { email: email, name: name, username: username, password: hashed} })
    const token = createJWT({ id: user.id.toString(), email: user.email });
    return { user, token };
}

export async function loginUser({ email, password }: LoginDTO) {
    const user = await prisma.user.findUnique({ where: { email }});
    if (!user || !(await comparePasswords(password, user.password))) {
        throw new Error('Invalid credentials');
    }
    const token = createJWT({ id: user.id.toString(), email: user.email });
    return { user, token };
}
