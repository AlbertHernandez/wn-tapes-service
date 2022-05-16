import { Request, Response, NextFunction } from 'express';
import { generateUuid } from '../../../generate-uuid';

export const CORRELATION_ID_KEY = 'x-request-id';
const CORRELATION_ID_HEADER = 'X-Request-ID';

export function correlationIdMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    const correlationHeader = req.header(CORRELATION_ID_KEY) || generateUuid();
    req.headers[CORRELATION_ID_KEY] = correlationHeader;
    res.set(CORRELATION_ID_HEADER, correlationHeader);

    next();
  };
}
