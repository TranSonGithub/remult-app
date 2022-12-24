import { NextFunction, Request, Response } from 'express';

// export const requireLogin = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     let accessToken;
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//       accessToken = req.headers.authorization.split(' ')[1];
//     }
//     if (!accessToken)
//       return res.status(401).json({
//         success: false,
//         message: 'Unauthorized',
//       });

//     const accessTokenDecoded = security.verifyJwt<IAccountSession>(accessToken, config.JWT_ACCESS_TOKEN!);
//     logger.info(`[requireLogin] accessTokenDecoded -> ${JSON.stringify(accessTokenDecoded)}`);
//     if (!accessTokenDecoded) {
//       logger.error(`[requireLogin] UNAUTHORIZED -> ${httpMessage.TOKEN_INVALID}`);
//       return next(new AppError(httpStatus.UNAUTHORIZED, httpMessage.TOKEN_INVALID));
//     }
//     res.locals.account = accessTokenDecoded;
//     req.session.account = accessTokenDecoded;
//     return next();
//   } catch (error: any) {
//     logger.error(`[requireLogin] error -> ${error.message}`);
//     return res.internalServer(error.message);
//   }
// };
