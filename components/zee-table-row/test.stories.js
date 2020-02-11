import { storiesOf } from '@storybook/vue'
import Avatar from './test.vue'



  export default {
    title: 'Design System/Avatar',
    parameters: {
      component: Avatar,
      componentSubtitle: 'Displays an image that represents a user or organization',
    },
  };

  export const ActionOnly = () => ({
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





