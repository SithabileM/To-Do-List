import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import ListName from './ListName'

ReactDOM.createRoot(document.getElementById('root')).render(
	
	<React.StrictMode>
		<Router>
				<div className="content">
					<Routes>
						<Route exact path="/" element={<App/>}/>
						<Route exact path="/title" element={<ListName/>}/>
					</Routes>
				</div>
		</Router>
		
	</React.StrictMode>
)