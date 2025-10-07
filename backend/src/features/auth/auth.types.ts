export interface LoginDTO {
    email: string;
    password: string;
}

export interface RegisterDTO {
    email: string;
    name: string;
    username: string;
    password: string;
    confirm_password: string;
}
