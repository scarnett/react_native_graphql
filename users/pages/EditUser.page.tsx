import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { logger } from 'react-native-logs'
import { useAppDispatch, useAppSelector } from '../../state/App.hooks'
import { addSnackbar } from '../../state/App.slice'
import { userUpdated } from '../state/Users.slice'
import { updateUser } from '../services/UserService.service'
import { i18n } from '../../config/i18n/i18n'
import AppBar from '../../components/AppBar.component'
import UserForm from '../components/UserForm.component'

const EditUser = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const log = logger.createLogger()
  const { id: userId } = useParams()

  const userState: any = useAppSelector((state) =>
    state.users.entities.find((user: any) => user.id == userId)
  )

  const [form, setForm]: any = useState({
    ...userState,
  })

  const onSubmit = async (event: any) => {
    if (form.firstName && form.lastName && form.email) {
      try {
        await updateUser(form)
        dispatch(userUpdated(form))
        dispatch(addSnackbar(i18n.t('userUpdated')))
        navigate(-1)
      } catch (error) {
        log.error(error)
        dispatch(addSnackbar(i18n.t('userUnableUpdate')))
      }
    } else {
      // TODO
    }
  }

  useEffect(() => {
    if (!userState) {
      navigate('/', { replace: true })
      return
    }

    return
  }, [userState])

  return (
    <>
      <AppBar title={i18n.t('userUpdate')} showBack={true} />
      <UserForm onSubmit={onSubmit} form={form} setForm={setForm} editing={true} />
    </>
  )
}

export default EditUser
