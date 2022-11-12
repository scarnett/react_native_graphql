import { Provider as StoreProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SafeAreaView } from 'react-native'
import AppConfirmDialog from './components/AppConfirmDialog.component'
import CreateUser from './users/pages/CreateUser.page'
import EditUser from './users/pages/EditUser.page'
import Users from './users/pages/Users.page'
import store from './state/App.store'
import AppSnackbar from './components/AppSnackbar.component'
import AppStyles from './theme/App.styles'
import AppTheme from './theme/App.theme'

function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={AppTheme.light}>
        <SafeAreaView style={AppStyles.MainContainer}>
          <AppConfirmDialog />
          <AppSnackbar />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Users />} />
              <Route path='/user/create' element={<CreateUser />} />
              <Route path='/user/:id/edit' element={<EditUser />} />
            </Routes>
          </BrowserRouter>
        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>
  )
}

export default App
