import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'
import { userStore } from '../stores/userStore'
import { debounce } from '../utils/debounce'

export const UserSearch = observer(() => {
	const { em } = userStore
	const handleEm = useCallback(
		debounce(e => userStore.setEm(e.target.value), 200),
		[]
	)

	return (
		<div className='mb-3'>
			<input
				type='text'
				placeholder='Найти...'
				defaultValue={em}
				onChange={handleEm}
				className='p-2 w-full'
			/>
		</div>
	)
})
