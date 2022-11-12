import { useAppDispatch, useAppSelector } from '../state/App.hooks'
import { clearConfirm } from '../state/App.slice'
import { Dialog, Portal, Text } from 'react-native-paper'
import { i18n } from '../config/i18n/i18n'
import React from 'react'
import AppButton from './AppButton.component'
import AppStyles from '../theme/App.styles'

const AppConfirmDialog = () => {
  const dispatch = useAppDispatch()
  const confirmState: any = useAppSelector((state) => state.app.confirm)
  const handleClose = () => {
    dispatch(clearConfirm())
  }

  const handleConfirm = () => {
    if (confirmState.onSubmit) {
      confirmState.onSubmit()
    }

    handleClose()
  }

  return (
    <Portal>
      <Dialog visible={Boolean(confirmState.onSubmit)} dismissable={confirmState.dismissable} onDismiss={handleClose}>
        <Dialog.Title>{confirmState.title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyLarge">{confirmState.message}</Text>
        </Dialog.Content>
        <Dialog.Actions style={AppStyles.FormButtonContainer}>
          <AppButton text={i18n.t('cancel')} mode={'text'} onPress={handleClose} />
          <AppButton text={i18n.t('confirm')} type={'danger'} onPress={handleConfirm} />
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

export default AppConfirmDialog
