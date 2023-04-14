import rateLimit from 'express-rate-limit';

// create a rate limiter middleware
const ratelimit = rateLimit({
     windowMs: 60 * 1000, // 1 minute window
     max: 5, // limit each IP to 5 requests per windowMs
     message: "Too many requests from this IP, please try again later.",
});

export default ratelimit;