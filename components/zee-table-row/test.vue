<template>
  <tr>
    <td v-for="(value, index) in values" :key="index">
      {{ value }}
    </td>
  </tr>
</template>

<script>
import { withA11y } from '@storybook/addon-a11y';
import { bool } from 'prop-types';

/**
Use an avatar for attributing actions or content to specific users.
The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
export default {
  name: 'JTableRow',
  decorators: [withA11y],
  props: {
    /**
    Use the loading state to indicate that the data Avatar needs is still loading.
    */
    values: {
      type: bool,
      required: true
    },
     /**
    The height of the Avatar's image.
    */
    height : {
      type : [Number, Object],
      required: false
    },

    /**
     * Size of Avatar .....  Allowed values are 'sm' | 'md' | 'lg' | 'xl'
     */
    size : {
      type : String,
      validator: function (value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
tr {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
}
td {
  padding: 8px;
}
</style>