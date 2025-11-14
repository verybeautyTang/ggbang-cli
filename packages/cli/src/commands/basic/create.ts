import type { Command } from 'commander'
import { logger } from '../../utils/logger'

export const create = (program: Command) => {
  return program
    .createCommand('create')
    .description('this is buildcli')
    .action(() => logger.info('this is createcli'))
}
