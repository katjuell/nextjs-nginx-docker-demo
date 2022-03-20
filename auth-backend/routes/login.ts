import { Router, Handler } from 'express'

export default (router: Router): Handler | void =>
    router.get('/login', (request, response, next) => {
        response.cookie('loginCookie', '1234', {
            httpOnly: false,
        })
        response.status(200).send()
        next()
    })
