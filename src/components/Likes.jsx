// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of Likes
	// write a span and a button element inside
	// export default the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
// BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state

import React, {Component} from 'react';
class Likes extends Component{
	constructor(props){
		super(props)
		this.state = {
			isLiked:false,
			display:'i am not liked',
			number: this.props.likes
		}
	}
	likeNumbers=()=>{
		console.log('am i here')
		const {number,display,isLiked} = this.state;
		this.setState({isLiked: !isLiked});
		if(isLiked===true){
			this.setState({number: number+1})
			this.setState({display:'I am liked'})

		}
		if(!isLiked===true){
			this.setState({display:'I am not liked'})
			if(number > 0){
				this.setState({number: number-1})
			}
			else{
				this.setState({number:0})
			}
		}
		

	}
	render(){
		const {display,number} = this.state;

		return(
			<div className ='Likes'>
				<span>
					<button onClick={this.likeNumbers}>{display}</button>
					<h3>{number}</h3>
				</span>
				
			</div>
		)
	}
}

export default Likes;