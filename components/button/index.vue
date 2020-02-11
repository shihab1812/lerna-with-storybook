
<template>
    <!-- Extracting component classes: -->
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
    </button>
</template>

<script>
import { withA11y } from '@storybook/addon-a11y';

export default {
    name : 'ButtonCmpnt',
    decorators: [withA11y],
    props: { 
        /**
         * Size of Buttons .....  Allowed values are 'sm' | 'md' | 'lg' | 'xl'
         */
        size : {
            type : String,
            required: false,
            validator: function (value) {
                // The value must match one of these strings
                return ['sm', 'md', 'lg'].indexOf(value) !== -1
            }
        },

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




