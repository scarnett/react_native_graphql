import { View } from 'react-native'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { logger } from 'react-native-logs'
import { useAppDispatch } from '../../state/App.hooks'
import { addConfirm, addSnackbar } from '../../state/App.slice'
import { deleteUser } from '../services/UserService.service'
import { userDeleted } from '../state/Users.slice'
import { i18n } from '../../config/i18n/i18n'
import AppTextInput from '../../components/AppTextInput.component'
import AppButton from '../../components/AppButton.component'
import AppStyles from '../../theme/App.styles'

const UserForm = ({ onSubmit, form, setForm, editing }: UserFormProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const log = logger.createLogger()
  const { handleSubmit, formState } = useForm()
  const { isSubmitting } = formState

  const onFormInputChange = (event: any) => {
    const { id, value }: any = event.target
    setForm({ ...form, [id]: value })
  }

  const handleDelete = () => {
    dispatch(addConfirm({
      title: `${i18n.t('userDelete')}?`,
      message: i18n.t('userDeleteConfirm', { firstName: form.firstName, lastName: form.lastName }),
      onSubmit: () => handleDeleteConfirm(form.id)
    }))
  }

  const handleDeleteConfirm = async (id: number) => {
    try {
      await deleteUser(id).then((data) => {
        dispatch(userDeleted(id))
        dispatch(addSnackbar(i18n.t('userDeleted')))
        navigate(-1)
      }).catch((error) => {
        log.error(error)
        dispatch(addSnackbar(error.message))
      })
    } catch (error) {
      log.error(error)
      dispatch(addSnackbar(i18n.t('error')))
    }
  }

  return (
    <View style={AppStyles.ViewContainer}>
      <AppTextInput
        label={i18n.t('userFirstName')}
        value={form.firstName}
        onChange={onFormInputChange}
        disabled={isSubmitting} />
      <AppTextInput
        label={i18n.t('userLastName')}
        value={form.lastName}
        onChange={onFormInputChange}
        disabled={isSubmitting} />
      <AppTextInput
        label={i18n.t('userEmail')}
        value={form.email}
        onChange={onFormInputChange}
        disabled={isSubmitting} />
      <View style={AppStyles.FormButtonContainer}>
        {editing && <AppButton text={i18n.t('userDelete')} disabled={isSubmitting} type={'danger'} onPress={handleDelete} />}
        <AppButton text={editing ? i18n.t('userUpdate') : i18n.t('userCreate')} loading={isSubmitting} onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  )
}

export default UserForm
