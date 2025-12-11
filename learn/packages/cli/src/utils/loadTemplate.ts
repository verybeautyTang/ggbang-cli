// 加载模板文件
// import { downloadTemplate } from 'giget'

import { copy } from 'fs-extra'
import { join } from 'node:path'
import { logger } from './logger'
import picocolors from 'picocolors'

import { downloadTemplate } from 'giget'

interface ITemplate {
  projectName: string
  template: string
  local: boolean
}

// 第一种 加载本地模板，直接复制过来就可以
export const loadLocalTemplate = (params: Omit<ITemplate, 'local'>) => {
  const { template, projectName } = params
  copy(join(__dirname, `../templates/template-${template}`), `${process.cwd()}/${projectName}`)
}

// 第二种 加载远端模板， 从远端 download 下载然后 copy 到指定的路径
export const loadRemoteTemplate = async (params: string) => {
  logger.info(picocolors.bgMagenta(params))
  const { dir } = await downloadTemplate(
    'https://codeload.github.com/design-sparx/antd-multipurpose-dashboard/tar.gz/refs/heads/main',
    {
      dir: `${process.cwd()}/.temp`,
    }
  )
  await copy(dir, `${process.cwd()}/${params}`)
}

// 加载模板
export const loadTemplate = (params: ITemplate) => {
  logger.info(params, '---------------')
  const { local, projectName, template } = params
  if (local) {
    loadLocalTemplate({ projectName, template })
  } else {
    loadRemoteTemplate(projectName)
  }
}
