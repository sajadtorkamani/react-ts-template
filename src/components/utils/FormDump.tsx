import { useFormikContext } from 'formik'
import React from 'react'
import { ObjectInspector } from 'react-inspector'

interface Props {
  label?: string
}

const FormDump: React.FC<Props> = ({ label = 'Form' }) => {
  const context = useFormikContext()

  if (!context) {
    throw new Error('You must place <FormDump /> inside a <Formik /> component')
  }

  const {
    values,
    errors,
    isValid,
    isInitialValid,
    submitCount,
    touched,
    dirty,
  } = context

  return (
    <div className="border-box box-shadow-lg p-2 my-2">
      <div className="mb-1">{label}</div>
      <ObjectInspector
        data={{
          values,
          errors,
          touched,
          isValid,
          isInitialValid,
          submitCount,
          dirty,
        }}
      />
    </div>
  )
}

export default FormDump
