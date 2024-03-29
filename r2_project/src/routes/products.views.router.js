import { Router } from "express"
import { ProductService } from "../repository/index.js"

const router = Router()

router.get("/", async (req, res) => {

    const limit = req.query?.limit || 10
    const page = req.query?.page || 1
    const filter = req.query?.filter || ''
    const sortQuery = req.query?.sort || ''
    const sortQueryOrder = req.query?.sortorder || 'desc'

    const search = {}
    if (filter) {
        search.title = filter
    }
    const sort = {}
    if (sortQuery) {
        sort[sortQuery] = sortQueryOrder
    }

    const options = {
        limit,
        page,
        sort,
        lean: true
    }

    const data = await ProductService.getPaginate(search, options)
    //console.log(JSON.stringify(data, null, 2, '\t'));

    const user = req.user.user

    const front_pagination = []
    for (let i = 1; i <= data.totalPages; i++) {
        front_pagination.push({
            page: i,
            active: i == data.page
        })
    }

    res.render('products', { data, user, front_pagination })
})

router.get("/ppp", async (req, res) => {

    const user = req.user.user


    res.render('products_2', { user })
})

export default router