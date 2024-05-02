import cors from "cors";
import authRouter  from'../modules/auth/auth.router.js'
export const appRouter = (app, express) => {
  // cors
  app.use(cors());
  // global middleware
  app.use(express.json());

  // Router
     //  auth 
     app.use('/auth',authRouter)
 
  // global error handler
  app.use((error, req, res, next) => {
    return res
      .status(error.cause || 500)
      .json({ success: false, message: error.message, stack: error.stack });
  });

  // page not Found
  app.all(
    ("*",
    (req, res, next) => {
      return next(new Error("Page not found!"));
    })
  );
};
