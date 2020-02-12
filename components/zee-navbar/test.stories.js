import { storiesOf } from '@storybook/vue'
import Avatar from './test.vue'



  export default {
    title: 'Patterns|Navbar',
    parameters: {
      component: Avatar,
      componentSubtitle: 'Displays an image that represents a user or organization',
    },
  };

  export const navbar1 = () => ({
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

  export const navbar2 = () => ({
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





