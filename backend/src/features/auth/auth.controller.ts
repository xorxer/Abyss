import type { NextFunction, Request, Response } from "express";
import * as AuthService from './auth.services.js';

export async function register(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await AuthService.registerUser(req.body);
        res.json(result);
    } catch (err) {
        next(err);
    }
}

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await AuthService.loginUser(req.body);
        res.json(result);
    } catch (err) {
        next(err);
    }
}