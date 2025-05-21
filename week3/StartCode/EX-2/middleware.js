export const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`, req.query);
    next();
}

export const validateQuery = (req, res, next) => {
    const {minCredits, maxCredits} = req.query;
    if (minCredits && isNaN(minCredits)) return res.status(400).send("minCredits must be an integer");
    if (maxCredits && isNaN(maxCredits)) return res.status(400).send("maxCredits must be an integer");
    if (minCredits && maxCredits && parseInt(minCredits) > parseInt(maxCredits)) {
        return res.status(400).send("minCredits cannot be greater than maxCredits");
    }
    next();
};

export const auth = (req, res, next) => {
    if (req.query.token !== 'xyz123') return res.status(401).send('Unauthorized');
    next();
};