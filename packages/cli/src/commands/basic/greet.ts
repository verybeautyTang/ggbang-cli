import { logger } from '../../utils/logger'

// 实现用户提问插件，一般用于 create 的时候用
import prompts from 'prompts'

const questions = [
  {
    type: 'text',
    name: 'username',
    message: 'What is your username?',
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?',
  },
  {
    type: 'select',
    name: 'color',
    message: 'What color do you like',
    choices: [
      { title: 'Red', value: '#ff0000' },
      { title: 'Green', value: '#00ff00' },
      { title: 'Blue', value: '#0000ff' },
    ],
    initial: 1,
  },
]

export const greet = async () => {
  const response = await prompts(questions)
  logger.info(`hi,${response.username},nice to meet you, your dream color is ${response.color}`)
}
