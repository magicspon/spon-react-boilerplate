import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Panel from '../src/app/components/Panel'

import style from '../src/style.css'

storiesOf('Button', module).add('with text', () => (
	<Panel onClick={action('clicked')}>Hello Button</Panel>
))
