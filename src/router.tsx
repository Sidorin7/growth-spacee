// router.ts
import {
	createRootRoute,
	createRoute,
	createRouter,
	Outlet,
} from '@tanstack/react-router'
import { lazy } from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Crypto from './pages/crypto/Crypto'
import OgeEge from './pages/ogeEge/OgeEge'
import Podcasts from './pages/podcasts/Podcasts'
import Prog from './pages/prog/Prog'

// ленивые импорты
const Home = lazy(() => import('./pages/Home'))
const Books = lazy(() => import('./pages/Books'))
const EnglishWords = lazy(() => import('./pages/EnglishWords')) // без .tsx!

const RootRoute = createRootRoute({
	component: () => (
		<div className='min-h-screen flex flex-col overflow-x-hidden'>
			<div className='mt-[64px]'>
				<Navbar />
			</div>
			<main className='flex-grow'>
				<Outlet />
			</main>
			<Footer />
		</div>
	),
})

const homeRoute = createRoute({
	getParentRoute: () => RootRoute,
	path: '/',
	component: Home,
})

const EnglishWordsRoute = createRoute({
	getParentRoute: () => RootRoute,
	path: '/english',
	component: EnglishWords, // просто компонент
})
const booksRoute = createRoute({
	getParentRoute: () => RootRoute,
	path: '/books',
	component: Books,
})
const podcastsRoute = createRoute({
	getParentRoute: () => RootRoute,
	path: '/podcasts',
	component: Podcasts,
})
const ogeegeRoute = createRoute({
	getParentRoute: () => RootRoute,
	path: '/ege',
	component: OgeEge,
})
const progRoute = createRoute({
	getParentRoute: () => RootRoute,
	path: '/programming',
	component: Prog,
})
const cryptoRoute = createRoute({
	getParentRoute: () => RootRoute,
	path: '/crypto',
	component: Crypto,
})

const routeTree = RootRoute.addChildren([
	homeRoute,
	booksRoute,
	EnglishWordsRoute,
	podcastsRoute,
	ogeegeRoute,
	progRoute,
	cryptoRoute,
])

export const router = createRouter({ routeTree })
