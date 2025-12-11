import { build } from './basic/build'
import { create } from './basic/create'
import { server } from './basic/server'
import { info } from './basic/info'
import { greet } from './basic/greet'
import { registerCommand } from './registerCommand'

registerCommand(build)
registerCommand(create)
registerCommand(server)
registerCommand(info)
registerCommand(greet)
