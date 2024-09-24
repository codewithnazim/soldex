import { useAppStore } from '@/store'
import { Button, ButtonProps } from '@chakra-ui/react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { LegacyRef, PropsWithChildren, forwardRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

type Props = PropsWithChildren<ButtonProps>

export default forwardRef(function ConnectedButton({ children, onClick, isDisabled, ...props }: Props, ref: LegacyRef<HTMLButtonElement>) {
  const { t } = useTranslation()
  const connected = useAppStore((s) => s.connected)
  const { setVisible } = useWalletModal()
  const handleClick = useCallback(() => setVisible(true), [setVisible])

  return (
    <Button
      ref={connected ? ref : undefined}
      {...props}
      isDisabled={connected ? isDisabled : false}
      style={{
        backgroundImage: 'linear-gradient(90deg, #F5E64F 2%, #27EDF6 100%)',
        color: "#0E2827",
        borderRadius: '50px'
      }}
      onClick={connected ? onClick : handleClick}
    >
      {connected ? children : t('button.connect_wallet')}
    </Button>
  )
})
