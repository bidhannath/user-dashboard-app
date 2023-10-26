import { getProfile } from '../../controllers/user.controller';
import { authenticateFirebase } from '../../middlewares/firebase';

const userRoutes = (router: any) => {
  router
  .route('/user/profile')
  //  .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
  // .get(auth('getUsers'), admin, validate(userValidation.getUsers), userController.getUsers);
  .get(authenticateFirebase, getProfile);

  router
    .route('/:userId')
    .get((req: any, res: any) => {
      res.json({message: 'success'});
    });
  //   .patch(auth('manageUsers'), admin, validate(userValidation.updateUser), userController.updateUser)
  //   .delete(auth('deleteUsers'), admin, validate(userValidation.deleteUser), userController.deleteUser);
}


export default userRoutes;