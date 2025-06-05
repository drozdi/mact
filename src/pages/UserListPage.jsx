import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { UserList } from '../components/UserList'
import { UserSearch } from '../components/UserSearch'
import { userStore } from '../stores/userStore'

export const UserListPage = observer(() => {
	const { loading } = userStore

	useEffect(() => {
		userStore.loadUsers()
	}, [])

	if (loading) {
		return <div>Loading users...</div>
	}

	return (
		<div>
			<UserSearch />
			<UserList />
		</div>
	)
})
