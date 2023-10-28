import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { getUserProfile } from "../services/user.service ";

type Firebase = any;

export const getProfile = catchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    const user = await getUserProfile(req.user.uid);
    res.status(200).json(user);
  }
);