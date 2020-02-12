import { storiesOf } from '@storybook/vue'
import Avatar from './test.vue'



  export default {
    title: 'Tokens|Typography',
    parameters: {
      component: Avatar,
      componentSubtitle: 'Displays an image that represents a user or organization',
    },
  };

  export const UK = () => ({
    components : {Avatar},
    template:     `
    <Avatar
      :values="values"
    />
  `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  });

  export const US = () => ({
    components : {Avatar},
    template:     `
    <Avatar
      :values="values"
    />
  `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  });





