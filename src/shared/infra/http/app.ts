import "reflect-metadata";
import "express-async-errors"
import '../../container'

import express, { Response, Request, NextFunction } from 'express'
import cors from 'cors';
import { routes } from './routes';
import { AppError } from "shared/utils/AppError";

export const app = express()

app.use(cors({ origin: '*' }));
app.use(express.json())
app.use(routes)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      mesage: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running"))