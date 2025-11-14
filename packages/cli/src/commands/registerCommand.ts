// 插件注册机制
import { program, Command } from 'commander'

// eslint-disable-next-line no-unused-vars
type Fn = (data: Command) => Command

export const registerCommand = (fn: Fn) => {
  program.addCommand(fn(program))
}
