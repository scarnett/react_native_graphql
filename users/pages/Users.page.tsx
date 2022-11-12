import { useAppSelector, useAppTypedDispatch } from '@app/state/App.hooks'
import { fetchUserList } from '@app/users/state/Users.slice'
import { Text } from 'react-native-paper'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { i18n } from '@app/config/i18n/i18n'
import UserListItem from '@app/users/components/UserListItem.component'
import AppFab from '@app/components/AppFab.component'
import AppBar from '@app/components/AppBar.component'
import AppStyles from '@app/theme/App.styles'

const Users = () => {
  const dispatch = useAppTypedDispatch()
  const navigate = useNavigate()
  const { entities } = useAppSelector((state) => state.users)
  const [usersLoaded, setUsersLoaded] = useState(false)
  const handleCreate = () => {
    navigate(`/user/create`)
  }

  useEffect(() => {
    (async () => {
      document.title = i18n.t('appTitle')
      setUsersLoaded(false)
      if (!usersLoaded) {
        dispatch(fetchUserList())
        setUsersLoaded(true)
      }
    })()
  }, [entities])

  return (
    <>
      <AppBar title={i18n.t('users')} />
      <View style={AppStyles.ListViewContainer}>
        {
          entities && entities.length ?
            entities.map((user: any, index: number) => <UserListItem key={index} {...user} />) :
            <View style={AppStyles.ViewContainer}>
              <Text variant="bodyLarge">{i18n.t('usersNone')}</Text>
            </View>
        }
        <AppFab onPress={handleCreate} />
      </View>
    </>
  )
}

export default Users
