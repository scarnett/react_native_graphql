type AppButtonProps = {
  text: string
  mode?: any
  loading?: boolean
  disabled?: boolean
  type?: 'primary' | 'danger'
  onPress: () => void
}
