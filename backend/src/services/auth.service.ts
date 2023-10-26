import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { User } from "../models/user.model"
import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';
import logger from '../config/logger';

export const createUser = async (userPayload: any) => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(userPayload.email, userPayload.password);
    const firebaseUser: any = userCredential.user;
    const userData = {
      ...userPayload,
      uid: firebaseUser?.uid
    }
    delete userData.password;
    const newUser = await User.create(userData);
    return { user: newUser, accessToken: await firebaseUser.getIdToken() };
  } catch (error: any) {
    logger.error(error);
    throw new ApiError(httpStatus.BAD_REQUEST, 'User Creation Failed');
  }
};

export const loginUser = async (userPayload: any) => {
  try {
    const { email, password } = userPayload;
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    const idToken = await user?.getIdToken();
    return { user: {uid: user?.uid, email: user?.email, emailVerified: user?.emailVerified}, accessToken: idToken };
  } catch (error: any) {
    logger.error(error);
    throw new ApiError(httpStatus.BAD_REQUEST, 'User Login Failed');
  }
};