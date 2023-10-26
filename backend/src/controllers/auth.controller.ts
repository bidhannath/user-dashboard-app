import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import 'firebase/compat/auth';
import { createUser, loginUser } from "../services/auth.service";


const register = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user, accessToken } = await createUser(req.body);
    res.status(201).json({ message: 'User registered successfully', user, accessToken });
  }
);

const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user, accessToken } = await loginUser(req.body);
    res.status(200).json({ message: 'Logged in successfully', user, accessToken });
  }
);

export { register, login }