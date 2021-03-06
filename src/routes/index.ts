import { Router } from "express";

import * as pageController from '../controllers/pageController';

const router = Router()

router.get('/', pageController.home)

router.get('/seriea', pageController.serieA)

router.get('/serieb', pageController.serieB)

router.get('/pesquisa', pageController.search)

export default router;