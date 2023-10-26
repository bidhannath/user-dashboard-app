import userRoutes from "./user.route";
import authRoutes from "./auth.route";

export const applyRoutes = (router: any) => {
  authRoutes(router);
  userRoutes(router);
  return router;
};
