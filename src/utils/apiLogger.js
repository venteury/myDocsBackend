const winston = require("winston");

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

// Create a logger instance
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    enumerateErrorFormat(),
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.splat(),
    winston.format.printf((info) => `[${info.timestamp}] ${info.message}`)
  ),
});

function apiLogger(req, res, next) {
  logger.info(`${req.method} ${req.url}`);
  next();
}

module.exports = apiLogger;
