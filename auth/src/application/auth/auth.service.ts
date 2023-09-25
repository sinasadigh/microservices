import mongoose from "mongoose";

class AuthService {
  getCurrentUser(name: String): String {
    return `hi ${name}`;
  }
}

export const authService = new AuthService();
