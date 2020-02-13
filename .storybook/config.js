
import { addParameters, addDecorator } from '@storybook/vue';
import { DocsPage } from 'storybook-addon-deps/blocks';


import Vue from 'vue';
import './assets/index.scss';

import Button from '../components/button/index.vue';

Vue.component('my-button', Button);



addParameters({
    options: {
        hierarchyRootSeparator: /\|/,
      },
  docs: {inlineStories: true, page: DocsPage },
  dependencies: { withStoriesOnly: false, hideEmpty: false }
});