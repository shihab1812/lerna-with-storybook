
<template>
    <!-- Extracting component classes: -->
    <div class="">
            <button class="bg-blue-1000 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Regular</button>
            <avatar></avatar>
    </div>


</template>


<script>
import { withA11y } from '@storybook/addon-a11y';
import {avatar} from '@npm_from_shihab/zee-avatar';



export default {
    name : 'ButtonCmpnt',
    decorators: [withA11y],
    components : {avatar},
    data: () => ({
    values: [
      'José Silva',
      'email@email.com'
    ]
  }),
    props: { 
        /**
         * Size of Buttons .....  Allowed values are ['sm', 'md', 'lg']
         */
        size : {
            type : String,
            required: false,
            validator: function (value) {
                // The value must match one of these strings
                return ['sm', 'md', 'lg'].indexOf(value) !== -1
            }
        },

       /**
         * theme option ..... Allowed values are ['success', 'warning', 'danger']
        **/
        theme : {
            type : String,
            required: false,
            validator: function (value) {
                // The value must match one of these strings
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
        }
    }
}
</script>




