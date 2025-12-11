import { run } from './cli'

//  入口文件不要弄脏，保持足够的简洁。入口文件的职责是给外部暴露内部的 api，仅此而已
// export const defineConfig = () => {}

export const runCli = () => {
  run(process.argv)
}
