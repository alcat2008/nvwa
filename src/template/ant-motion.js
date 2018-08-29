export default {
  component, // 组件单元，可直接导入展示

  dataSource: {
    ['default~title/content/button~selector']: {
      style: {
        ['~css property']: {
          name: 'description',
          value: 'value',
          remark: 'remark',
          select: 'select values'
        },
        ['&:hover~pseudo-class']: {
          name: 'display name',
          style: {
            // ... inherit
          }
        }
      },
      ['style[~Type]']: {
        // ... inherit
      },
      content: {
        name: 'display',
        value: 'value',
        remark: 'remark',
      }
    }
  }
}
