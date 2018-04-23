import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

// Lightning Design Components
import '../include/slds'
import FormElement from '../components/FormElement'
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

storiesOf('FormElement', module)
  .add('Input', () => (
    <FormElement label="Input Label" forId="fe-01">
      <input type="text" id="fe-01" class="slds-input" placeholder="Placeholder Text" />
    </FormElement>
  ))
  .add('Textarea', () => (
    <FormElement label="Textarea Label" forId="fe-02">
      <textarea id="fe-02" class="slds-textarea" placeholder="Placeholder Text"></textarea>
    </FormElement>
  ))
  .add('Checkbox', () => (
    <FormElement label="Checkbox Label" forId="fe-03" singleCheckbox />
  ))
  .add('Radio Group', () => (
    <FormElement label="Radio Group Label" groupControl="true">
      <span class="slds-radio">
        <input type="radio" id="radio-17" name="options" value="on" />
        <label class="slds-radio__label" for="radio-17">
          <span class="slds-radio_faux"></span>
          <span class="slds-form-element__label">Radio Label One</span>
        </label>
      </span>
      <span class="slds-radio">
        <input type="radio" id="radio-18" name="options" value="on" />
        <label class="slds-radio__label" for="radio-18">
          <span class="slds-radio_faux"></span>
          <span class="slds-form-element__label">Radio Label Two</span>
        </label>
      </span>
    </FormElement>
  ))

storiesOf('FormLayout', module)
  .add('stacked', () => <FormLayout type="stacked"/>)
  .add('horizontal', () => <FormLayout type="horizontal"/>)
  .add('inline', () => <FormLayout type="inline"/>)

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
  .add('Long Form', () => (
    <Text type="text" size="longform">
      <p>The quick brown fox jumps over the lazy dog.</p>
      <p>The quick brown fox jumps over the lazy dog.</p>
      <Text type="heading_small">Heading</Text>
      <ul>
        <li>The quick brown fox jumps over the lazy dog.</li>
        <li>The quick brown fox jumps over the lazy dog.
          <ul>
            <li>The quick brown fox jumps over the lazy dog.</li>
            <li>The quick brown fox jumps over the lazy dog.
              <ul>
                <li>The quick brown fox jumps over the lazy dog.</li>
                <li>The quick brown fox jumps over the lazy dog.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <Text type="heading_small">Heading</Text>
      <ul>
        <li>The quick brown fox jumps over the lazy dog.</li>
        <li>The quick brown fox jumps over the lazy dog.
          <ul>
            <li>The quick brown fox jumps over the lazy dog.</li>
            <li>The quick brown fox jumps over the lazy dog.
              <ul>
                <li>The quick brown fox jumps over the lazy dog.</li>
                <li>The quick brown fox jumps over the lazy dog.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </Text>
  ))
  .add('Align Left', () => (
    <Text type="text" size="align_left">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
  .add('Align Right', () => (
    <Text type="text" size="align_right">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
  .add('Align Center', () => (
    <Text type="text" size="align_center">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
  .add('Color Default', () => (
    <Text type="text" size="color_default">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
  .add('Color Weak', () => (
    <Text type="text" size="color_weak">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
  .add('Color Error', () => (
    <Text type="text" size="color_error">
      The quick brown fox jumps over the lazy dog.
    </Text>
  ))
  .add('Color Inverse', () => (
    <div style={{'background':'black'}}>
      <Text type="text" size="color_inverse">
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
  ))
  .add('Color Inverse Weak', () => (
    <div style={{'background':'black'}}>
      <Text type="text" size="color_inverse-weak">
        The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
  ))
