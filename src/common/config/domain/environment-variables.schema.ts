import * as Joi from 'joi';

export const environmentVariablesSchema = Joi.object({
  PORT: Joi.number().default(3000),
  LOGGER_LEVEL: Joi.string().default('info'),
});
