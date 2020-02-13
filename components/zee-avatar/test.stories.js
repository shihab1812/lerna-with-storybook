import { storiesOf } from '@storybook/vue'
import Avatar from './test.vue'



  export default {
    title: 'Elements|Avatar',
    parameters: {
      component: Avatar,
      componentSubtitle: 'Displays an image that represents a user or organization',
    },
  };

  export const ActionOnly = () => ({
    components : {Avatar},
    template:     `
    <Avatar/>
  `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  });





