import { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import classNames from 'classnames'

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
        {label && <p className={styles['inputField__label']}>Label</p>}
        <input
          className={styles['inputField__item']}
          type="text"
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          ref={ref}
        />
        <div className={styles['inputField__border']} />
        {error && <p>{error}</p>}
      </label>
    )
  }
)

export default InputField
