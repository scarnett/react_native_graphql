import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logger } from 'react-native-logs'
import { useAppDispatch } from '@app/state/App.hooks'
import { userCreated } from '@app/users/state/Users.slice'
import { createUser } from '@app/users/services/UserService.service'
import { addSnackbar } from '@app/state/App.slice'
import { i18n } from '@app/config/i18n/i18n'
import AppBar from '@app/components/AppBar.component'
import UserForm from '@app/users/components/UserForm.component'

const CreateUser = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const log = logger.createLogger()
  const [form, setForm]: any = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const onSubmit = async (event: any) => {
    if (form.firstName && form.lastName && form.email) {
      try {
        await createUser(form)
        dispatch(userCreated(form))
        dispatch(addSnackbar(i18n.t('userCreated')))
        navigate(-1)
      } catch (error) {
        log.error(error)
        dispatch(addSnackbar(i18n.t('userUnableCreate')))
      }
    } else {
      // TODO
    }
  }

  return (
    <>
      <AppBar title={i18n.t('userCreate')} showBack={true} />
      <UserForm onSubmit={onSubmit} form={form} setForm={setForm} />
    </>
  )
}

export default CreateUser
