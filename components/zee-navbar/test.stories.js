import { storiesOf } from '@storybook/vue'
import Avatar1 from './test.vue'



  export default {
    title: 'Patterns|Navbar',
    parameters: {
      component: Avatar1,
      componentSubtitle: 'Displays an image that represents a user or organization',
    },
  };

  export const navbar1 = () => ({
    components : {Avatar1},
    template:     `
    <Avatar1/>
  `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  });

  export const navbar2 = () => ({
    components : {Avatar1},
    template:     `
    <Avatar1/>
  `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  });





