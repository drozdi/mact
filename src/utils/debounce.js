export function debounce(fn, delay) {
	let timer

	const func = (...args) => {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => fn(...args), delay)
	}

	return func
}
