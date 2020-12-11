import React from 'react';

const People = [
	{
		name: 'Susan Smith',
		job: 'Web Developer',
		img: 'person-1_rfzshl.jpg',
		description:
			"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
	},
	{
		name: 'Anna Johnson',
		job: 'Web Designer',
		img: 'person-2_np9x5l.jpg',
		description:
			'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
	},
	{
		name: 'Peter Jones',
		job: 'Intern',
		img: 'person-3_ipa0mj.jpg',
		description:
			'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.'
	},
	{
		name: 'Bill Anderson',
		job: 'CEO',
		img: 'person-4_t9nxjt.jpg',
		description:
			'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
	}
];

class PeopleChanges extends React.Component {
	constructor(props) {
		super(props);
		this.firstLoading();
	}
	//First person appears on the screen on load
	firstLoading = () => {
		this.props.firstPerson(People[0]);
	};

	// ---> next person on the array
	rightClick = () => {
		const cP = this.props.currentPerson;
		if (cP < People.length - 1) {
			this.props.next(People[cP + 1], cP + 1);
		} else {
			this.props.next(People[0], 0);
		}
	};
	// <-- previous person on the array
	leftClick = () => {
		const cP = this.props.currentPerson;

		if (cP > 0) {
			this.props.next(People[cP - 1], cP - 1);
		} else {
			this.props.next(People[People.length - 1], People.length - 1);
		}
	};

	// random person
	randomClick = () => {
		const randomPerson = Math.floor(Math.random() * People.length);
		this.props.next(People[randomPerson], randomPerson);
	};
	render() {
		return (
			<div className="changeContainer">
				<div className="arrowContainer">
					<i className="caret left icon" onClick={this.leftClick} />
					<i className="caret right icon" onClick={this.rightClick} />
				</div>
				<button className="ui blue button" onClick={this.randomClick}>
					Suprise Me
				</button>
			</div>
		);
	}
}

export default PeopleChanges;
