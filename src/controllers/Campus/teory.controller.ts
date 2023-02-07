import { Request, Response } from "express";
import { serverError } from "../../helpers/jsonErrors";
import { Lesson } from "../../interfaces/teory.interface";
import ModuleTeory from "../../models/Campus/Teory"


export const setTeory = async (req: Request, res: Response) => {
    const { ...payload } = req.body;
    try {
        await ModuleTeory.create(payload);
        res.status(201).json({ message: "Lesson created" });
    } catch (e) {
        return res.status(400).json({ message: "Lesson Not Created", error: e });
    }
};

export const getAllTeorys = async (req: Request, res: Response) => {
    try {
        const lessons: any = ModuleTeory.find();
        res.status(201).json({ ...lessons });
    } catch (e) {
        return serverError(res, e);
    }
};

export const getTeoryByID = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const lessons: any = ModuleTeory.findOne({ _id: id });
        res.status(200).json({ ...lessons });
    } catch (e) {
        serverError(res, e);
    }
};

export const deleteTeoryByID = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        ModuleTeory.findOneAndDelete({ _id: id });
        res
            .status(200)
            .json({ message: `Lesson with ID ${id} has been deleted` });
    } catch (e) {
        serverError(res, e);
    }
};