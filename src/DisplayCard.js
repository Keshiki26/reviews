import React from 'react';
import './card.css';
import PeopleChanges from './PeopleChanges';

class DisplayCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currentPerson: 0, Person: {} };
	}

	firstLoad = (person) => {
		this.setState({ Person: person });
	};
	personChange = (person, cP) => {
		this.setState({ currentPerson: cP, Person: person });
	};

	render() {
		return (
			<div className="cardContainer">
				<div className="imgContainer">
					<img src={this.state.Person.img} />
					<i className="quote right icon" />
				</div>
				<h1 className="personName">{this.state.Person.name}</h1>
				<h4 className="personJob">{this.state.Person.job}</h4>
				<p className="personDescription">{this.state.Person.description}</p>
				<PeopleChanges
					firstPerson={this.firstLoad}
					currentPerson={this.state.currentPerson}
					next={this.personChange}
				/>
			</div>
		);
	}
}

export default DisplayCard;
