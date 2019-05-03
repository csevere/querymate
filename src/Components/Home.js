import React from 'react';
//import {BrowserRouter, Route} from 'react-router-dom';
import HomeCard from './HomeCard';

const Home = (props) => {
	return (
		<div className="grid-container">
			<div className="item grid-item-create">
				<HomeCard
					image="/images/letter.jpg"
					cardTitle="Create Letter Template"
					cardContent="Create a new query letter template to send to agents."
					icon="add"
					/>
			</div>

			<div className="item grid-item-schedule">
				<HomeCard
					image="/images/time.jpg"
					cardTitle="Schedule"
					cardContent="Shedule the date and time to send your query letters to agents."
					icon="access_time"
				/>
			</div>

			<div className="item grid-item-inbox">
				<HomeCard
					image="/images/inbox.jpg"
					cardTitle="Check Inbox"
					cardContent="Check your inbox for agent requests or rejections."
					icon="email"
					/>
			</div>

			<div className="item grid-item-search">
				<HomeCard
					image="/images/search.jpg"
					cardTitle="Search Agents"
					cardContent="Search and organize agents for your work's genre."
					icon="search"
				/>
			</div>

		</div>
		
	);
}

export default Home;

//<code className="identifier"><pre>.create-template</pre></code>