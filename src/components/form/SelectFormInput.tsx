import { FormLabel } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import ReactSelect, { type Props } from 'react-select'

import type { FormInputProps } from '@/types/component-props'

const SelectFormInput = <
  Option extends { value: string; label: string },
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  id,
  name,
  label,
  containerClassName,
  labelClassName,
  noValidate,
  options,
  ...other
}: FormInputProps<TFieldValues> & Props<Option>) => {
  return (
    <Controller<TFieldValues, TName>
      control={control}
      name={name as TName}
      render={({ field, fieldState }) => (
        <div className={containerClassName}>
          {label &&
            (typeof label === 'string' ? (
              <FormLabel htmlFor={id ?? name} className={labelClassName}>
                {label}
              </FormLabel>
            ) : (
              <>{label}</>
            ))}
          {/* @ts-expect-error  any*/}
          <ReactSelect<Option>
            {...other}
            {...field}
            options={options}
            onChange={(e) => field.onChange(e!.value)}
            value={Array.isArray(options) && options?.find((op) => 'value' in op && op.value == field.value)}
            classNamePrefix="react-select"
            id={id ?? name}
          />
          {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
        </div>
      )}
    />
  )
}

export default SelectFormInput
