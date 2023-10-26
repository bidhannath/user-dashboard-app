import { authenticateFirebase } from '../../middlewares/firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import { register, login } from '../../controllers/auth.controller';
import validate from '../../middlewares/validate';
import { validateCreateUser, validateLogin } from '../../validations/auth.validation';


const authRoutes = (router: any) => {
  router
  .route('/auth/login')
   .post(validate(validateLogin) ,login);

  router
    .route('/:userId')
    .get((req: any, res: any) => {
      res.json({message: 'success'});
    });

  router
    .route('/auth/register')
    .post(validate(validateCreateUser), register);
}


export default authRoutes;