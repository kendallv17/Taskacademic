module.exports = {
    secret: process.env.AUTH_SECRET || "t1a2s3k4",
    expires: process.env.AUTH_EXPIRES || "24h",
    rounds: process.env.AUTH_ROUNDS || 10
}