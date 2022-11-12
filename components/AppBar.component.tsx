import { Appbar } from 'react-native-paper'
import { useNavigate } from 'react-router-dom'
import AppStyle from '@app/theme/App.styles'

const AppBar = ({ title, showBack }: AppBarProps) => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <Appbar.Header
      style={AppStyle.AppBarStyle}>
      {showBack && <Appbar.BackAction onPress={handleBack} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  )
}

export default AppBar
