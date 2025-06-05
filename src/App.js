import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { UserCardPage } from './pages/UserCardPage'
import { UserListPage } from './pages/UserListPage'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<UserListPage />} />
					<Route path='user/:id' element={<UserCardPage />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
