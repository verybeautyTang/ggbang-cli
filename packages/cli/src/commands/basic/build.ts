import type { Command } from 'commander'
import { logger } from '../../utils/logger'

export const build = (program: Command) => {
  return program
    .createCommand('build')
    .description('this is buildcli')
    .action(() => logger.info('this is buildcli'))
}
