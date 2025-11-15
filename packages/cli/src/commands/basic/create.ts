import type { Command } from 'commander'
import { logger } from '../../utils/logger'
import { loadTemplate } from '../../utils/loadTemplate'
import picocolors from 'picocolors'
import prompts from 'prompts'

export const create = (program: Command) => {
  return program
    .createCommand('create')
    .description('create ggbang-cli')
    .argument('<name>')
    .option('-t, --template <>', 'input template name')
    .action(async (projectName, options) => {
      logger.info(picocolors.bgGreen(projectName))
      const { template } = options
      // 在没有输入 template 的情况下给选择
      if (!template) {
        const selectTemplate = {
          type: 'select',
          name: 'template',
          message: 'What color do you like',
          choices: [
            { title: 'react-js', value: 'react-js' },
            { title: 'react-ts', value: 'react-ts' },
            { title: 'vue-ts', value: 'vue-ts' },
            { title: 'vue-js', value: 'vue-js' },
            { title: 'vanilla-ts', value: 'vanilla-ts' },
            { title: 'vanilla-js', value: 'vanilla-js' },
          ],
          initial: 1,
        }
        const resolves = await prompts(selectTemplate)
        const { template } = resolves
        loadTemplate(projectName, template)
      } else {
        loadTemplate(projectName, template)
      }
    })
}
