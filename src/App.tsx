// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserTable from './components/UserTable'
import UserDetails from './components/UserDetails'
import AllPostsList from './components/AllPostsList'
import CommentList from './components/CommentList'
import Testing from './components/Testing'

import PostList from './components/PostList'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import Navbar from "./components/Navbar";
import NotFound from "./components/404";
declare global {
	interface Window {
		HSStaticMethods: IStaticMethods;
	}
}

const App: React.FC = () => {

	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path='/' element={<UserTable />} />
					<Route path='/user/:id' element={<UserDetails />} />
					<Route path='/user/:id/posts' element={<PostList />} />
					<Route path='/posts' element={<AllPostsList />} />
					<Route path='/posts/:postId/comments' element={<CommentList />} />
					<Route path='/test' element={<Testing />}/>

					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
