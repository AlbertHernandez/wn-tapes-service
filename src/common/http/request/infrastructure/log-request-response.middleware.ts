import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';

const API_KEY_FIELD = 'api-key';

@Injectable()
export class LogRequestResponseMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const userAgent = request.get('user-agent') || '';

    const commonHttpRequest = {
      requestMethod: request.method,
      requestUrl: request.url,
      userAgent,
      protocol: request.protocol,
      remoteIp: request.ip,
    };

    const apiKey = request.headers[API_KEY_FIELD];

    this.logger.log({
      message: 'Incoming Request',
      httpRequest: commonHttpRequest,
      context: {
        body: request.body,
        header: {
          ...request.headers,
          [API_KEY_FIELD]: apiKey
            ? typeof apiKey === 'string' && apiKey.replace(/./g, 'X')
            : undefined,
        },
      },
    });

    response.on('close', () => {
      this.logger.log({
        message: 'Finishing request',
        httpRequest: { ...commonHttpRequest, status: response.statusCode },
      });
    });

    next();
  }
}
