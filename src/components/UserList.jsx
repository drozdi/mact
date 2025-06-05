import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import { userStore } from '../stores/userStore'

export const UserList = observer(() => {
	const { filteredUsers } = userStore

	return (
		<ul className='list-none p-0'>
			{filteredUsers.map(user => (
				<li
					key={user.id}
					className='rounded-sm mb-3 overflow-hidden border border-gray-300'
				>
					<Link
						to={`/user/${user.id}`}
						className='block text-inherit no-underline'
					>
						<div className='p-3 flex flex-col gap-2 bg-gray-100 hover:bg-gray-200'>
							<span className='text-lg font-bold'>
								{user.firstName} {user.lastName}
							</span>
							<span>Email: {user.email}</span>
							<span>Role: {user.role || 'N/A'}</span>
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
})
