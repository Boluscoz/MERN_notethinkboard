const rateLimit = require("../config/db_2");

async function rateLimiter(req, res, next) {
    try {
        const identifier = req.ip || req.connection.remoteAddress || "unknown";

        const { success, pending, limit, remaining, reset } =
            await rateLimit.limit(identifier);

        res.setHeader("RateLimit-Limit", limit);
        res.setHeader("RateLimit-Remaining", remaining);
        res.setHeader("RateLimit-Reset", reset);

        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later.",
            });
        }

        next();
    } catch (error) {
        console.error("Rate limiter error:", error);
        next();
    }
}

module.exports = rateLimiter;
