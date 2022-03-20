import { Router, Handler } from 'express'

export default (router: Router): Handler | void =>
    router.get('/logout', (request, response, next) => {
        response.clearCookie('loginCookie')
        response.status(200).send()
        next()
    })
