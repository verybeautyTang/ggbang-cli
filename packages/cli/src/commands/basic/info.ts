//  实现日志插件
import { logger } from '../../utils/logger'

// 实现颜色插件
import picocolors from 'picocolors'

export const info = () => {
  // 打印日志，不用 console.log,自己实现
  logger.info('this is Info')
  // 颜色配置
  logger.info(picocolors.green(`How are ${picocolors.italic(`you`)} doing?`))
}
