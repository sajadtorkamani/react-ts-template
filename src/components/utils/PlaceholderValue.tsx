import classNames from 'classnames'
import React from 'react'

type Props = React.ComponentProps<'span'>

const PlaceholderValue: React.FC<Props> = ({
  className,
  children,
  ...props
}) => (
  <span className={classNames('text-warning', className)} {...props}>
    {'<'}
    {children}
    {'>'}
  </span>
)

export default PlaceholderValue
