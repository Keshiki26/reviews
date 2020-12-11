import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DisplayCard from './DisplayCard';

class App extends React.Component {
	render() {
		return (
			<div className="root">
				<div className="contentContainer">
					<h2 class="ui header title">
						<div class="content">Our Reviews</div>
					</h2>
					<DisplayCard />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
