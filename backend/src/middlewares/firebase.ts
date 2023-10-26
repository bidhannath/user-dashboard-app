// firebaseMiddleware.ts
import 'firebase/auth';
import { firebaseAdminAuth } from '..';

const authenticateFirebase = (req: any, res: any, next: any) => {
  const idToken = req.headers.authorization.split(' ')[1];
  if (idToken) {
    firebaseAdminAuth
      .verifyIdToken(idToken)
      .then((decodedToken: any) => {
        req.user = decodedToken;
        next();
      })
      .catch((error: any) => {
        res.status(403).json({ error: 'Unauthorized', message: error.message || '' });
      });
  } else {
    res.status(403).json({ error: 'Unauthorized' });
  }
};

export { authenticateFirebase };
