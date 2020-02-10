import { storiesOf } from '@storybook/vue'
import JTableRow from './test.vue'

storiesOf('table-row', module)
  .add('normal', () => ({
    components: { JTableRow },
    template:
    `
      <JTableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  }))