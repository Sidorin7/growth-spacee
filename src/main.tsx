// src/main.jsx
import { RouterProvider } from '@tanstack/react-router'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Spinner from './components/ui/Spinner'
import { router } from './router'
import './styles/_main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback={<Spinner />}>
			<RouterProvider router={router} />
		</Suspense>
	</React.StrictMode>
)
