import { logger } from '../../utils/logger'

export const greet = (...commandArgs) => {
  logger.info('this is greet', commandArgs)
}
