import bcrypt from "bcrypt";

export async function hashPasword(password: string) {
    return bcrypt.hash(password, 10);
}

export function comparePasswords(password: string, hash: string) {
    return bcrypt.compare(password, hash);
}