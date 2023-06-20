import React, { ForwardedRef, forwardRef, useState } from 'react'
import Select, { StylesConfig } from 'react-select'
import classNames from 'classnames'
import Attention from '@/ui/Icons/Attention'

import styles from './SelectField.module.scss'

export interface OptionInterface {
  value: string
  label?: string
}

type SelectOptionProps = {
  name: string
  placeholder?: string
  label?: string
  error?: string
  className?: string
  onChange: (value: object | null) => void
  value?: OptionInterface
}

const options: OptionInterface[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const SelectField = forwardRef<HTMLInputElement, SelectOptionProps>(
  (
    {
      name,
      className,
      label,
      error,
      placeholder = 'State',
      onChange,
      value,
    }: SelectOptionProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const customStyles: StylesConfig<OptionInterface, false> = {
      valueContainer: (base) => ({
        ...base,
        padding: '0',
        display: 'flex',
        flex: 'initial',
        marginTop: '2rem',
      }),
      placeholder: (base) => ({
        ...base,
        margin: '0',
        fontSize: '15rem',
        '@media (max-width: 767px)': {
          fontSize: '13rem',
        },
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
      menu: (provided) => ({
        ...provided,
        borderRadius: 16,
      }),
      menuList: (provided) => ({
        ...provided,
        backgroundColor: '#FFFFFF',
        borderColor: '#24282c',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 16,
        padding: '16rem 0',
      }),
      option: (provided) => ({
        ...provided,
        cursor: 'pointer',
      }),
    }

    const handleChange = (option: OptionInterface | undefined) => {
      option && onChange ? onChange(option) : null
    }

    return (
      <div
        className={classNames(styles['selectOption'], className, {
          [styles['active']]: isFocused,
        })}
      >
        <Select<OptionInterface, false>
          isSearchable={false}
          name={name}
          options={options}
          styles={customStyles}
          classNamePrefix="select"
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#e5e9eb',
              primary: '#266ef9',
            },
          })}
          onMenuOpen={() => setIsMenuOpen(true)}
          onMenuClose={() => setIsMenuOpen(false)}
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
            error ? styles['__error'] : '',
            isMenuOpen ? styles['__hidden'] : ''
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

export default SelectField
