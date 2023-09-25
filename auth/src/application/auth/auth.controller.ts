import { Request, Response } from "express";
import { authService } from "./auth.service";

class AuthController {
  currentUser(req: Request, res: Response) {
    const result = authService.getCurrentUser("Sina");
    res.send(result);
  }
}


export const authController = new AuthController();
