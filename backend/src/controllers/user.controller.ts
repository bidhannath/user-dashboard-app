import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";

type Firebase = any;

const getProfile = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: 'Got Profile successfully' });
  }
);

export { getProfile }