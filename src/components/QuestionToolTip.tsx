import InfoCircleIcon from '@/icons/misc/InfoCircleIcon'
import QuestionCircleIcon from '@/icons/misc/QuestionCircleIcon'
import { SvgIcon } from '@/icons/type'
import { colors } from '@/theme/cssVariables'
import { background, Box, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Tooltip from './Tooltip'

/**
 * component \
 * for this case, click tooltip icon should show a tooltip even in mobile, but chakra didn't support this
 */
export function QuestionToolTip(props: {
  label?: ReactNode
  /** @default 'question' */
  iconType?: 'question' | 'info'
  // iconSize?: string
  iconProps?: SvgIcon
}) {
  return (
    <Tooltip
      style={{
        background: '#0e2827',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
      }}
      label={
        <Text fontSize="sm" color={colors.textSecondary}>
          {props.label}
        </Text>
      }
    >
      <Box cursor={props.label ? 'pointer' : undefined}>
        {props.iconType === 'info' ? (
          // @ts-expect-error don't why this error
          <InfoCircleIcon style={{ display: 'block' }} {...props.iconProps} />
        ) : (
          // @ts-expect-error don't why this error
          <QuestionCircleIcon style={{ display: 'block' }} {...props.iconProps} />
        )}
      </Box>
    </Tooltip>
  )
}
