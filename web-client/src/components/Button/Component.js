import React from 'react'

import useStyles from './styles'

export default function Button({ type = 'button', icon, size, variant, children, className, tooltip, tooltipId, ...props }) {
  return (
    <button
      data-tip={tooltip}
      data-effect="solid"
      data-for={tooltipId}
      type={type}
      // className={classNames(styles.button, className, {
      //   [styles.large]: size === 'large',
      //   [styles.small]: size === 'small',
      //   [styles.xsmall]: size === 'xsmall',
      //   [styles.action]: variant === 'action',
      //   [styles.danger]: variant === 'danger',
      // })}
      {...props}
      className={useStyles}
    >
      {/* {icon && <Icon icon={icon} size={size} />} */}
      {/* {children} */}
      {/* {tooltip && <ReactTooltip id={tooltipId}>{tooltip}</ReactTooltip>} */}
    </button>
  )
}
