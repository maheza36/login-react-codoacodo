import { useState } from "react";
import { Post } from "../Hooks/PostClient";

export const LoginService = (data) => {
    const [loading, error, dataLogin] = Post("/api/Authentication/Login", data);        
    return [loading, error, dataLogin];
}