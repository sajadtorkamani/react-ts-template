import classNames from 'classnames'
import { useField, useFormikContext } from 'formik'
import React, { ChangeEventHandler, CSSProperties, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

import { PALETTE } from '../../lib/constants'
import FieldError from './FieldError'
import FieldLabel from './FieldLabel'
import HelpText from './HelpText'

export interface TextInputProps {
  autoFocus?: boolean | ((value: string) => boolean)
  className?: string
  inputGroupText?: string
  label?: string | React.ReactNode
  max?: number
  min?: number
  name: string
  onChange?: (newValue: string) => void
  placeholder?: string
  style?: CSSProperties
  type?: string
  isDisabled?: boolean
  transformErrorMessage?: (originalError: string) => React.ReactElement | string
  step?: string
  helpText?: React.ReactNode | string
}

const TextInput: React.FC<TextInputProps> = ({
  autoFocus,
  className,
  inputGroupText,
  label,
  max,
  min,
  name,
  onChange,
  placeholder,
  style,
  type,
  isDisabled,
  transformErrorMessage,
  step,
  helpText,
}) => {
  const { submitCount } = useFormikContext()
  const [field, { error }] = useField(name)
  const id = `field_${name}`
  const showError = !!(submitCount > 0 && error)
  const [isFocused, setIsFocused] = useState(false)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    field.onChange(event)

    if (onChange) {
      onChange(event.target.value)
    }
  }

  const renderWithInputGroup = () => (
    <InputGroup
      hasValidation
      className={isFocused ? 'input-group-focused' : ''}
    >
      {inputGroupText && (
        <InputGroup.Text
          className={classNames({ 'border-danger': showError }, 'border-end-0')}
          style={{
            backgroundColor: isDisabled ? PALETTE.disabled : 'white',
          }}
        >
          {inputGroupText}
        </InputGroup.Text>
      )}

      {renderFormControl()}
    </InputGroup>
  )

  const renderWithoutInputGroup = () => {
    return renderFormControl()
  }

  const renderFormControl = () => (
    <>
      <Form.Control
        data-field={id}
        id={id}
        {...field}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type={type}
        onChange={handleChange}
        isInvalid={showError}
        autoFocus={
          typeof autoFocus === 'function' ? autoFocus(field.value) : autoFocus
        }
        placeholder={placeholder}
        className={classNames(className, {
          'border-start-0 ps-0 shadow-none': inputGroupText,
        })}
        style={style}
        min={min}
        max={max}
        disabled={isDisabled}
        step={step}
      />
    </>
  )

  return (
    <>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}

      {inputGroupText ? renderWithInputGroup() : renderWithoutInputGroup()}

      {helpText && <HelpText>{helpText}</HelpText>}

      {showError && (
        <FieldError inputId={id}>
          {transformErrorMessage ? transformErrorMessage(error) : error}
        </FieldError>
      )}
    </>
  )
}

TextInput.defaultProps = {
  type: 'text',
}

export default TextInput
