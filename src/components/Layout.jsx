import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<div>
			<header className='p-3 select-none text-white bg-blue-600'>
				<nav>
					<Link to='/' className='text-white  hover:underline'>
						Home
					</Link>
				</nav>
			</header>

			<main className='max-w-5xl p-3 m-auto'>
				<Outlet />
			</main>
		</div>
	)
}
