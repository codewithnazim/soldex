/**
 * for faster development, just pass css blocks to chakra-ui component
 */

import { SystemProps } from '@chakra-ui/react'
import { colors, sizes } from './cssVariables'

export const heroGridientColorCSSBlock: SystemProps = {
  background: colors.brandGradient,
  backgroundClip: 'text',
  color: 'transparent',
  fontSize: sizes.textHeroTitle,
  fontWeight: '700'
}

export const panelCard: SystemProps = {
  // bg: colors.backgroundLight,
  // border: colors.panelCardBorder,
  // boxShadow: colors.panelCardShadow,
  borderRadius: ['12px', '20px'],
  overflow: 'hidden',
  background: '#99999914',
  boxShadow: '0 8px 32px 0 #0C3F3D',
  backdropFilter: 'blur( 4px )',
  border: '1px solid rgba( 255, 255, 255, 0.18 )'
}
