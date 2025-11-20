import classNames from 'classnames'
import React from 'react'
import { ObjectInspector } from 'react-inspector'

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
  label?: string
  data: unknown
}

const Dump: React.FC<Props> = ({ label, data, className, ...props }) => (
  <div
    className={classNames('border-box box-shadow-lg p-2 my-2', className)}
    {...props}
  >
    <div className="mb-1">{label}</div>
    <ObjectInspector data={data} />
  </div>
)

export default Dump
