export const validate = ((req, res, next) => {
    if(!req.email || !req.password) return res.status(400).json({error: "No Email or password given"});
    next();
})