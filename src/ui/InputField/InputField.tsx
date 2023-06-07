import classNames from 'classnames'
import { ChangeEvent, ForwardedRef, forwardRef } from 'react'

import styles from './InputField.module.scss'

type InputFieldProps = {
  name: string
  placeholder?: string
  label?: string
  error?: string
  className?: string
  onChange: (value: string) => void
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { onChange, name, className, label, error, placeholder }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e.target.value)
    }

    return (
      <label className={classNames(styles['inputField'], className)}>
        {label && <p>Label</p>}
        <input
          className={styles.inputFieldItem}
          type="text"
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {error && <p>{error}</p>}
      </label>
    )
  }
)

export default InputField
