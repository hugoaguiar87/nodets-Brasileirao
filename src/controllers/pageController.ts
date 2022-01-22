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
    let listTeams = Teams.getAllTeams()
    listTeams = listTeams.filter((item) => {
        if(item.division === 'Serie A') {
            return true
        }
    })

    res.render('pages/seriea.mustache', {
        listTeams,
        banner: 'seriea-banner.jpg'
    })
}

export const serieB = (req: Request, res: Response) => {
    let listTeams = Teams.getAllTeams()
    listTeams = listTeams.filter((item) => {
        if(item.division === 'Serie B') {
            return true
        }
    })

    res.render('pages/serieb.mustache', {
        listTeams,
        banner: 'serieb-banner.jpg'
    })
}

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string

    let listTeams = Teams.getSearchTeams(query)

    res.render('pages/home.mustache', {
        listTeams,
        query
    })
}