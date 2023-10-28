import 'firebase/compat/auth';
import { User } from "../models/user.model"
import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';
import logger from '../config/logger';

export const getUserProfile = async (uid: string) => {
  try {
    const user = await User.findOne({where: { uid }});
    return user;
  } catch (error: any) {
    logger.error(error);
    throw new ApiError(httpStatus.BAD_REQUEST, 'Error while getting user profile details');
  }
};