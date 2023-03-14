import { Router } from "express";
import { getStores, getStoreByID, createStore } from '../controllers/stores.controller.js'

const router = Router()

router.get('/', getStores)
router.get('/:uid', getStoreByID)
router.post('/', createStore)

export default router