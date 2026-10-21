// import { Redis } from '@upstash/redis'
const { Ratelimit } = require("@upstash/ratelimit")
const { Redis } = require("@upstash/redis")
const dotenv = require("dotenv")

dotenv.config()

const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "20 s")
})

module.exports = rateLimit
// await redis.set("foo", "bar");
// await redis.get("foo");