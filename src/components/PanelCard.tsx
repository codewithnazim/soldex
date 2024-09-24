import React from 'react'
import { panelCard } from '@/theme/cssBlocks'
import { Box, BoxProps } from '@chakra-ui/react'

export interface PanelCardProps extends BoxProps {
  variant?: 'light' | 'dark'
}

const PanelCard = React.forwardRef<HTMLDivElement, PanelCardProps>((props, ref) => {
  return <Box ref={ref} {...panelCard} display="flex" flexDir="column" {...props} style={{
    WebkitBackdropFilter: 'blur( 4px )',
  }} />
})

PanelCard.displayName = 'PanelCard'

/** @deprecated just use block:{@link panelCard} */
export default PanelCard

//  backgroundImage: 'linear-gradient(90deg, #F5E64F 2%, #27EDF6 100%)',
// color: "#0E2827"