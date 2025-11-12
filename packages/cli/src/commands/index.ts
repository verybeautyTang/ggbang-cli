import { server } from './basic/server'
import { create } from './basic/create'
import { build } from './basic/build'

import { Command } from 'commander'
import { greet } from './basic/greet'
import { info } from './basic/info'
const program = new Command()

// 怎么获取用户输入的内容
// 如果手写的话很费时间，所以这里可以选择用插件 commander

program.version('0.0.1').name('ggbang').description('ggbang cli demo')

//  help 命令是 commander 里面内置的

// 创建项目
program.command('create').description('create ggbangcli project').action(create)
// 打包项目
program.command('build').description('build ggbangcli project').action(build)
// 运行项目
program.command('server').description('start ggbangcli project').action(server)
// 欢迎
program.command('greet').description('greet ggbangcli project').action(greet)
// 打印日志
program.command('info').description('info ggbangcli project').action(info)
export const run = (argv: string[]) => {
  program.parse(argv)

  /** 这是手写的，很麻烦 */
  // const [, , ...rest] = argv
  // const [command, commandArgs] = rest

  // switch (command) {
  //   case 'create': {
  //     create(commandArgs)
  //     break
  //   }
  //   case 'build': {
  //     build(commandArgs)
  //     break
  //   }
  //   case 'server': {
  //     server(commandArgs)
  //     break
  //   }
  //   default:
  //     return 'no valid command'
  // }
}
