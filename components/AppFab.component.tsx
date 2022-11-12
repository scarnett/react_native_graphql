import { FAB } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import AppStyles from '../theme/App.styles'
import AppTheme from '../theme/App.theme'

const AppFab = ({ icon, iconSize, styles, size, mode, onPress }: AppFabProps) => {
  return (
    <FAB
      icon={() => (
        <MaterialCommunityIcons name={icon ?? 'plus'} size={iconSize ?? 32} color={AppTheme.light.colors.surface} />
      )}
      size={size ?? 'small'}
      mode={mode ?? 'flat'}
      style={styles ?? AppStyles.FabStyle}
      animated={false}
      onPress={onPress}
    />
  )
}

export default AppFab
