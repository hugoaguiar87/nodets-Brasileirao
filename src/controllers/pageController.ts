import { Request, Response } from "express";

import { Teams } from "../models/Teams";

export const home = (req: Request, res: Response) => {
    let listTeams = Teams.getAllTeams()

    res.render('pages/home.mustache', {
        listTeams,
        banner: 'brasileirao-banner.jpeg'
    })
}

export const serieA = (req: Request, res: Response) => {
    res.render('pages/seriea.mustache')
}

export const serieB = (req: Request, res: Response) => {
    res.render('pages/serieb.mustache')
}