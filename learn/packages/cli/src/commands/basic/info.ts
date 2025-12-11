//  实现日志插件
import type { Command } from 'commander'
import { logger } from '../../utils/logger'

// 实现颜色插件
import picocolors from 'picocolors'

export const info = (program: Command) => {
  return program
    .createCommand('info')
    .description('this is Info')
    .action(() => {
      // 打印日志，不用 console.log,自己实现
      logger.info('this is Info')
      // 颜色配置
      logger.info(picocolors.green(`How are ${picocolors.italic(`you`)} doing?`))
    })
}
