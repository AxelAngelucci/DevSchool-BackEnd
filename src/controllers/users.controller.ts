import { Request, Response } from "express";
import { serverError, notFoundError } from "../helpers/jsonErrors";
import { UserRequestI, UserResponseI } from "../interfaces/user.interface";
import Users from "../models/Users";
import { hashPass } from "../helpers/passEncrypt";
import { generatedPass } from "../helpers/generatePassword";
import { sendMail } from "../utils/mailer";


export const newUser = async (req: Request, res: Response) => {
    const { ...payload }: UserRequestI = req.body;
    const pass = generatedPass;
    try {
        payload.password = hashPass(pass);
        await Users.create(payload);
        await sendMail(payload.email, "Ya tienes tu usuario en DevSchool Adademia!", `Hola ${payload.name}! Estamos muy contentos de que nos hayas elegido. \n Tu usuario para el campus es: ${payload.email} y tu contraseña es: ${pass}. \n Por supuesto, puedes cambiar estos datos cuando lo desees`);
        res.status(201).json({ message: "User Created" });
    } catch (e) {
        return res.status(400).json({ message: "User Not Created", error: e });
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: UserRequestI[] = await Users.find();
        res.status(201).json({ ...users });
    } catch (e) {
        return serverError(res, e);
    }
};

export const getUserByID = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user: UserRequestI = await Users.findOne({ _id: id });
        res.status(200).json({ ...user });
    } catch (e) {
        serverError(res, e);
    }
};

export const putUserByID = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { ...payload } = req.body;
    try {
        const user: UserResponseI = await Users.findOneAndUpdate(
            { _id: id },
            payload
        );
        if (!user) return notFoundError(res, "User");
        return res.status(200).json({
            message: `User with id ${id} has been updated`,
            id: user._id,
            user
        });
    } catch (e) {
        return serverError(res, e);
    }
};

export const deleteUserByID = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await Users.findOneAndDelete({ _id: id });
        res
            .status(200)
            .json({ message: `User with ID ${id} has been deleted` });
    } catch (e) {
        serverError(res, e);
    };
};

export const showUserInTable = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user: UserRequestI = await Users.findOne({ _id: id });
        if (!user) return notFoundError(res, "User");
        await Users.findByIdAndUpdate({ _id: id }, { showInTable: !user.showInTable });
        res.status(200).json({ message: `User with ID ${id} has been updated` });
    } catch (e) {
        serverError(res, e);
    };
};

