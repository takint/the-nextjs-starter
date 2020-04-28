import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import React from 'react'
import AppStyles from '../src/styles/global.styles.tw'

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <AppStyles />
      {storyFn()}
    </React.Fragment>
  )
}

addDecorator(withGlobalStyles)
