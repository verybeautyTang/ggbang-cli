export const noJasmineRules = {
  meta: {
    type: 'problem',
    docs: {
      description: '禁止使用 Jasmine 相关语法',
      recommended: false,
    },
    fixable: null, // 或 'code' 如果可自动修复
    schema: [], // 如果有配置选项，定义 schema
  },
  create: function (context) {
    return {
      VariableDeclaration(node) {
        node.name.toLowerCase() === 'jasmine'
        console.log(node)
        context.report({
          node,
          message: '禁止使用 jasmine 相关语法',
        })
      },
    }
  },
}
