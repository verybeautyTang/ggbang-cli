import type { Command } from 'commander'
import { logger } from '../../utils/logger'

export const server = (program: Command) => {
  return program
    .createCommand('serve')
    .description('this is server')
    .action(() => logger.info('this is server'))
}
