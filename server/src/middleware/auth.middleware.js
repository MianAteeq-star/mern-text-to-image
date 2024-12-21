import jwt from "jsonwebtoken"


export const userAuth = (req, res, next) => {

    const {token} = req.headers
    if(!token) return res.status(401).json({message: "Unauthorized or login again to get token"})

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        if(decoded.id){
            req.body.userId = decoded.id
        }else{
            return res.status(401).json({message: "Unauthorized or token not provided"})
        }
        
        next()
    } catch (error) {
        return res.status(401).json({message: "Unauthorized or token not provided"})
    }

}