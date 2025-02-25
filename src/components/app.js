import React from "react";
import {Router,Route,Switch} from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import Navbar from "./navbar";
import history from '../history';

const App =()=>{
	return(
		<div>
			<Router history={history}>
			<Navbar />
			<Switch>	
				<div className="ui container">
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="/streams/edit/:id" exact component={StreamEdit} />
					<Route path="/streams/delete/:id" exact component={StreamDelete} />
					<Route path="/streams/:id" exact component={StreamShow} />
				</div>
			</Switch>
				
			</Router>
		</div>)
}

export default App;