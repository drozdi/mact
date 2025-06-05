import { observer } from 'mobx-react-lite'
import { userStore } from '../stores/userStore'

export const UserCard = observer(() => {
	const { currentUser } = userStore

	if (!currentUser) return <div>User not found</div>

	return (
		<div className='border border-gray-300 overflow-hidden rounded-sm'>
			<div className='p-3 bg-gray-200'>
				<h2 className='m-0 text-3xl py-2'>Персональная информация</h2>
				<p>
					<strong>First Name:</strong> {currentUser.firstName}
				</p>
				<p>
					<strong>Last Name:</strong> {currentUser.lastName}
				</p>
				<p>
					<strong>Email:</strong> {currentUser.email}
				</p>
				<p>
					<strong>Phone:</strong> {currentUser.phone}
				</p>
				<p>
					<strong>Role:</strong> {currentUser.role || 'N/A'}
				</p>
			</div>
			{currentUser.company && (
				<div className='p-3 bg-gray-200'>
					<h2 className='m-0 text-3xl py-2'>Компания</h2>
					<p>
						<strong>Department:</strong>{' '}
						{currentUser.company.department || 'N/A'}
					</p>
					<p>
						<strong>Name:</strong> {currentUser.company.name || 'N/A'}
					</p>
					<p>
						<strong>Title:</strong> {currentUser.company.title || 'N/A'}
					</p>
					<p>
						<strong>Address:</strong>{' '}
						{currentUser.company.address?.city || 'N/A'}
					</p>
				</div>
			)}
		</div>
	)
})
