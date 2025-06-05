import { makeAutoObservable } from 'mobx'
import { fetchUserById, fetchUsers } from '../services/userApi'

class UserStore {
	users = []
	currentUser = null
	loading = false
	em = ''

	constructor() {
		makeAutoObservable(this)
	}

	// Загрузка списка пользователей
	async loadUsers() {
		this.loading = true
		try {
			const users = await fetchUsers()
			this.users = users
		} catch (error) {
			console.error('Failed to load users', error)
		} finally {
			this.loading = false
		}
	}

	// Загрузка конкретного пользователя
	async loadUser(id) {
		this.loading = true
		try {
			const user = await fetchUserById(id)
			this.currentUser = user
		} catch (error) {
			console.error(`Failed to load user ${id}`, error)
		} finally {
			this.loading = false
		}
	}

	// Установка поискового запроса
	setEm(em) {
		this.em = em
	}

	// Получение отфильтрованных пользователей
	get filteredUsers() {
		if (!this.em) return this.users

		const em = this.em.toLowerCase()
		return this.users.filter(
			user =>
				user.firstName.toLowerCase().includes(em) ||
				user.lastName.toLowerCase().includes(em)
		)
	}
}

export const userStore = new UserStore()
