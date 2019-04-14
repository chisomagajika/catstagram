// Exercise 2: Set It Up
	// write a class component
	// make it a div with className FeedList
	// import FeedItem and include it inside the div
	// export default the component!

// Exercise 3: Prop It Up
	// FeedList should accept props as params
	// destructure photos from props
	// iterate over the data and map each photo data to a FeedItem

import React, {Component} from 'react';
import FeedItem from './FeedItem.jsx';

class FeedList extends Component{
	// imageArray(photos){
	// 	const mapOfPhotos = this.props.imagePhotos.map(photo=>{
	// 		const {url} = imagePhotos;
	// 		console.log(url);
	// 		return url;
	// 	})
	// }
	render(){
		const arrayOfComponents = this.props.imagePhotos.map((photo,i)=>{
					console.log(photo)
					const {url, likes} = photo
					return <FeedItem key={i} url={url} likes={likes}/>
				})
		return(
			<div>
				
				{arrayOfComponents}
			</div>
		)
	}

}
export default FeedList;
