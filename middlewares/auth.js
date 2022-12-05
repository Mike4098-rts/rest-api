// middlewares/auth.js
export default function authorization(req, res, next) {
    if (req.headers.authorization !== "1234") {
        res.status(401)
        res.end()
        return
    }

    next()
}
