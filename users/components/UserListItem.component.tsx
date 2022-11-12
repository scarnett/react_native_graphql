import { List } from 'react-native-paper'
import { useNavigate } from 'react-router-dom'
import AppStyle from '../../theme/App.styles'

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
      right={props => <List.Icon {...props} icon='pencil' />}
      onPress={handleEdit}
      style={AppStyle.ListItemStyle}
    />
  )
}

export default UserListItem
