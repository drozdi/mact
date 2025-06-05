import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserCard } from '../components/UserCard'
import { userStore } from '../stores/userStore'

export const UserCardPage = observer(() => {
	const { id } = useParams()
	const { loading } = userStore

	useEffect(() => {
		if (id) {
			userStore.loadUser(id)
		}
	}, [id])

	if (loading) {
		return <div>Loading user data...</div>
	}

	return (
		<div>
			<UserCard />
		</div>
	)
})
