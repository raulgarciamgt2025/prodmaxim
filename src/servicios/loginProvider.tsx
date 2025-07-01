import { API_URL } from "../configs/apiConfig";
import CryptoJS from "crypto-js";

export interface LoginRequest {
    login_usuario: string;
    contrasena: string;
}

export interface Usuario {
    id_usuario: any;
    login_usuario: string;
    nombre_usuario: string;
    email: string;
}

export interface LoginResponse {
    estado: boolean;
    mensaje: string;
    data: Usuario[];
}

export const loginFetchData = async (
    data: LoginRequest
): Promise<LoginResponse> => {
    const payload = { id_empresa: 8, usuarioLogin: "admin", login_usuario: "admin", contrasena: "123456" };


    try {
        const response = await fetch(`${API_URL}Usuario/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(payload),
        });
        return await response.json();
    } catch (error) {
        console.error("Error creating menu:", error);
        throw error;
    }
};