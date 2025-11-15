// 加载模板文件

// 这里加载2种情况
// 第一种 加载本地模板，直接复制过来就可以
// 第二种 加载远端模板， 从远端 download 下载然后 copy 到指定的路径

import { copy } from 'fs-extra'
import { join } from 'node:path'

export const loadTemplate = (projectName: string, templateName: string) => {
  copy(join(__dirname, `../templates/template-${templateName}`), `${projectName}/`)
}
