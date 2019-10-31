import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
    options: {
        theme: themes.dark,
    },
});

configure(require.context('../src/components', true, /\.stories\.tsx$/), module);
