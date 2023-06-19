import React, { ForwardedRef, forwardRef, useState } from 'react'
import Select, { StylesConfig } from 'react-select'
import classNames from 'classnames'
import Attention from '@/ui/Icons/Attention'

import styles from './SelectOption.module.scss'

interface Option {
  value: string
  label?: string
}

type SelectOptionProps = {
  name: string
  placeholder?: string
  label?: string
  error?: string
  className?: string
  onChange: (value: string | null) => void
}

const options: Option[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const SelectOption = forwardRef<HTMLInputElement, SelectOptionProps>(
  (
    {
      name,
      className,
      label,
      error,
      placeholder = 'State',
      onChange,
    }: SelectOptionProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isFocused, setIsFocused] = useState(false)

    const customStyles: StylesConfig<Option, false> = {
      valueContainer: (base) => ({
        ...base,
        padding: '0',
        display: 'flex',
        flex: 'initial',
      }),
      placeholder: (base) => ({
        ...base,
        margin: '0',
        fontSize: '15rem',
        fontWeight: '500',
        color: '#24282c',
        textTransform: 'uppercase',
      }),
      control: (base) => ({
        ...base,
        minHeight: 'initial',
        display: 'flex',
        borderStyle: 'initial',
        borderRadius: 'initial',
        height: '44rem',
        cursor: 'pointer',
        borderColor: 'transparent',
        boxShadow: 'initial',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(./icons/selectArrow.svg)`,
        backgroundPosition: 'center right',
        backgroundSize: '24rem',
        '&:hover': {
          borderColor: 'transparent',
        },
        '&:focus': {
          borderColor: 'transparent',
          outline: 'none',
        },
      }),
      indicatorsContainer: (base) => ({
        ...base,
        display: 'none',
      }),
    }

    const handleChange = (option: Option | null) => {
      if (option) {
        const { value } = option
        onChange(value)
      } else {
        onChange('')
      }
    }

    const handleFocus = () => {
      setIsFocused(true)
    }

    const handleBlur = () => {
      setIsFocused(false)
    }

    return (
      <div
        className={classNames(styles['selectOption'], className, {
          [styles['active']]: isFocused,
        })}
      >
        <Select<Option, false>
          isSearchable={false}
          name={name}
          options={options}
          styles={customStyles}
          classNamePrefix="select"
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#e5e9eb',
              primary: '#266ef9',
            },
          })}
        />
        {label && (
          <p
            className={classNames(
              styles['selectOption__label'],
              error ? styles['__error'] : ''
            )}
          >
            {label}
          </p>
        )}
        <div
          className={classNames(
            styles['selectOption__border'],
            error ? styles['__error'] : ''
          )}
        ></div>
        {error && (
          <p className={classNames(styles['selectOption__message'])}>
            <Attention className={styles['selectOption__message_icon']} />
            {error}
          </p>
        )}
      </div>
    )
  }
)

export default SelectOption
