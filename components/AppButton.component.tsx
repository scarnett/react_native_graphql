import { Button } from 'react-native-paper'
import _ from 'lodash'
import AppStyles from '../theme/App.styles'

const AppButton = ({ text, mode, loading, disabled, type, onPress }: AppButtonProps) => {
  const getType = () => {
    if (mode === 'text') {
      return null;
    }

    switch (type) {
      case 'danger':
        return AppStyles.FormButtonDanger;

      case 'primary':
      default:
        return AppStyles.FormButtonPrimary;
    }
  }

  return (
    <Button
      nativeID={_.camelCase(text)}
      loading={loading ?? false}
      mode={mode ?? 'contained'}
      disabled={loading || disabled}
      onPress={onPress}
      style={getType()}>
      {text}
    </Button>
  )
}

export default AppButton
