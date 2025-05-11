// src/main.jsx
import { RouterProvider } from '@tanstack/react-router'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Spinner from './components/ui/Spinner'
import { router } from './router'
import './styles/_main.scss'

const rootElement = document.getElementById('root')

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<Suspense fallback={<Spinner />}>
				<RouterProvider router={router} />
			</Suspense>
		</React.StrictMode>
	)
} else {
	console.error('Root element not found')
}
