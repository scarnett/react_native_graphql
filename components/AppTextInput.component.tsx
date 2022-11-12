import { TextInput } from 'react-native-paper'
import React from 'react'
import _ from 'lodash'
import AppStyles from '../theme/App.styles'

const AppTextInput = ({ label, value, onChange, disabled, mode }: AppTextInputProps) => {
  return (
    <TextInput
      nativeID={_.camelCase(label)}
      label={label}
      value={value}
      onChange={onChange}
      disabled={disabled}
      mode={mode ?? 'outlined'}
      style={AppStyles.TextFieldStyle} />
  )
}

export default AppTextInput
