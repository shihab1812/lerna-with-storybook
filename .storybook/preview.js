import './assets/utility.scss';

import { addParameters, addDecorator } from '@storybook/vue';

import { DocsPage } from 'storybook-addon-deps/blocks';



addParameters({
  docs: { page: DocsPage },
  dependencies: { withStoriesOnly: false, hideEmpty: false }
});