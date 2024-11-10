import React from 'react'
import { Form } from 'react-bootstrap'

interface Props {
  children: React.ReactNode
  className?: string
  htmlFor: string
}

const FieldLabel: React.FC<Props> = ({ children, className, htmlFor }) => (
  <Form.Label htmlFor={htmlFor} className={className}>
    {children}
  </Form.Label>
)

export default FieldLabel
