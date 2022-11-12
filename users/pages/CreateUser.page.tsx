import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logger } from 'react-native-logs'
import { useAppDispatch } from '../../state/App.hooks'
import { userCreated } from '../state/Users.slice'
import { createUser } from '../services/UserService.service'
import { addSnackbar } from '../../state/App.slice'
import { i18n } from '../../config/i18n/i18n'
import AppBar from '../../components/AppBar.component'
import UserForm from '../components/UserForm.component'

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
