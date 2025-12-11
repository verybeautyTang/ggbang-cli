import type { Command } from 'commander'
import { logger } from '../../utils/logger'
import { spawn } from 'node:child_process'

export const server = (program: Command) => {
  return program
    .createCommand('serve')
    .description('serve ggbang-cli')
    .action(() => {
      const Command = 'npm'
      const args = ['run', 'serve']
      const servespawn = spawn(Command, args, {
        stdio: 'inherit',
      })
      servespawn.on('close', (code: number) => {
        logger.info('子进程退出，退出码：', code)
      })
    })
}
