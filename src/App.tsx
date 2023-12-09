// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserTable from './components/UserTable'
import UserDetails from './components/UserDetails'
import AllPostsList from './components/AllPostsList'
import CommentList from './components/CommentList'

import PostList from './components/PostList'

const App: React.FC = () => {
	return (
		<Router>
			<div>
				<h1>React TypeScript CRUD App</h1>
				<Routes>
					<Route path='/' element={<UserTable />} />
					<Route path='/user/:id' element={<UserDetails />} />
					<Route path='/user/:id/posts' element={<PostList />} />
					<Route path='/posts' element={<AllPostsList />} />
					<Route path='/posts/:postId/comments' element={<CommentList />} />

					<Route path='*' element={<div>404 Not Found</div>} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
