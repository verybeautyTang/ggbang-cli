import type { Command } from 'commander'
import { logger } from '../../utils/logger'
import { spawn } from 'node:child_process'

export const build = (program: Command) => {
  return program
    .createCommand('build')
    .description('build ggbang-cli')
    .action(() => {
      const Command = 'npm'
      const args = ['run', 'build']
      const buildspawn = spawn(Command, args, {
        stdio: 'inherit',
      })
      buildspawn.on('close', (code: number) => {
        logger.info('子进程退出，退出码：', code)
      })
    })
}
