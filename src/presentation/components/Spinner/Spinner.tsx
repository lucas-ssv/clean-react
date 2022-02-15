import React, { HTMLAttributes } from 'react'
import Styles from './spinner-styles.scss'

type Props = HTMLAttributes<HTMLElement> & {
  isNegative?: boolean
}

export const Spinner: React.FC<Props> = (props: Props) => {
  const negativeClass = props.isNegative ? Styles.negative : ''

  return (
    <div {...props} data-testid="spinner" className={[Styles.spinner, negativeClass, props.className].join(' ')}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
