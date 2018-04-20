import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

// Lightning Design Components
import '../include/slds'
import FormLayout from '../components/FormLayout'
import Text from '../components/Text'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))

storiesOf('FormLayout', module).add('default', () => <FormLayout />)

storiesOf('Text', module)
  .add('Body Size Default', () => (
    <Text type="text" size="body_regular">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
  .add('Body Size Small', () => (
    <Text type="text" size="body_small">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
  .add('Heading Large', () => (
    <Text type="text" size="heading_large">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
  .add('Heading Medium', () => (
    <Text type="text" size="heading_medium">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
  .add('Heading Small', () => (
    <Text type="text" size="heading_small">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
  .add('Title', () => (
    <Text type="text" size="title">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
  .add('Title Uppercase', () => (
    <Text type="text" size="title_caps">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
