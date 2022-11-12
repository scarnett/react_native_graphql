import { useAppDispatch, useAppSelector } from '@app/state/App.hooks'
import { clearSnackbar } from '@app/state/App.slice'
import { Text } from 'react-native'
import { Snackbar } from 'react-native-paper'
import AppStyles from '@app/theme/App.styles'

const AppSnackbar = ({ duration }: AppSnackbarProps) => {
  const dispatch = useAppDispatch()
  const snackbarState: any = useAppSelector((state) => state.app.snackbar)
  const handleDismiss = () => {
    dispatch(clearSnackbar())
  }

  return (
    <Snackbar
      visible={snackbarState.message != null}
      duration={duration ?? 3000}
      onDismiss={() => handleDismiss()}
      style={AppStyles.SnackbarInfoStyle}
    >
      <Text style={AppStyles.SnackbarTextStyle}>{snackbarState.message}</Text>
    </Snackbar>
  )
}

export default AppSnackbar
