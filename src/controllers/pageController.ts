import { Request, Response } from "express";

import { Teams } from "../models/Teams";
import { navActive } from "../helpers/navActive";

export const home = (req: Request, res: Response) => {
    let listTeams = Teams.getAllTeams()

    res.render('pages/home.mustache', {
        listTeams,
        banner: 'brasileirao-banner.jpeg',
        menu: navActive('Todos')
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
        banner: 'seriea-banner.jpg',
        menu: navActive('SerieA')
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
        banner: 'serieb-banner.jpg',
        menu: navActive('SerieB')
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