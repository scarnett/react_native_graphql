import { StyleSheet } from 'react-native'
import AppTheme from './App.theme'

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  ViewContainer: {
    flex: 1,
    padding: 16,
  },
  FormButtonContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  FormButtonPrimary: {
    flex: 1,
  },
  FormButtonDanger: {
    backgroundColor: AppTheme.light.colors.error, // TODO!
  },
  ListViewContainer: {
    flex: 1,
  },
  TextFieldStyle: {
    marginBottom: 16,
  },
  FabStyle: {
    backgroundColor: AppTheme.light.colors.primary, // TODO!
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AppBarStyle: {
    elevation: 1,
  },
  ListItemStyle: {
    borderBottomColor: AppTheme.light.colors.surfaceVariant, // TODO!
    borderBottomWidth: 1,
  },
  ListItemTitleStyle: {
    fontWeight: 'bold',
  },
  SnackbarInfoStyle: {
    backgroundColor: AppTheme.light.colors.secondary, // TODO!
  },
  SnackbarTextStyle: {
    color: AppTheme.light.colors.surface, // TODO!
    fontWeight: 'bold',
  },
})

export default styles
