import { server } from './basic/server'
import { create } from './basic/create'
import { build } from './basic/build'

// 怎么获取用户输入的内容
export const run = (argv: string[]) => {
  const [, , ...rest] = argv
  const [command, commandArgs] = rest

  switch (command) {
    case 'create': {
      create(commandArgs)
      break
    }
    case 'build': {
      build(commandArgs)
      break
    }
    case 'server': {
      server(commandArgs)
      break
    }
    default:
      return 'no valid command'
    // break;
  }
}
