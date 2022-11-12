import { List } from 'react-native-paper'
import { useNavigate } from 'react-router-dom'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppStyle from '@app/theme/App.styles'

const UserListItem = ({ id, firstName, lastName, email }: User) => {
  const navigate = useNavigate()
  const handleEdit = () => {
    navigate(`/user/${id}/edit`)
  }

  return (
    <List.Item
      title={`${firstName} ${lastName}`}
      titleStyle={AppStyle.ListItemTitleStyle}
      description={email}
      right={props => <MaterialCommunityIcons name={'pencil'} size={24} />}
      onPress={handleEdit}
      style={AppStyle.ListItemStyle}
    />
  )
}

export default UserListItem
