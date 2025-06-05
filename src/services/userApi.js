import axios from 'axios'

const API_URL = 'https://dummyjson.com/users'

export const fetchUsers = async () => {
	try {
		const response = await axios.get(API_URL)
		return response.data.users
	} catch (error) {
		console.error('Error fetching users:', error)
		return []
	}
}

export const fetchUserById = async id => {
	try {
		const response = await axios.get(`${API_URL}/${id}`)
		return response.data
	} catch (error) {
		console.error(`Error fetching user ${id}:`, error)
		return null
	}
}
