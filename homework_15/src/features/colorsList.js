import React from 'react';
import ColorsListItem from './colorListItem'

class ColorsList extends React.Component {

				render() {
								return ( <React.Fragment > {
																this.props.list.length > 0 ?
																<div className = "colors-container" > {
																				this.props.list.map((item) => (
																					<div > { ColorsListItem(item, this.props.addToSelected) }
																					</div>
																				))
																}
																</div> : <div className="colors-not-found">There are no colors found</div >
												} </React.Fragment>
								);
				}
}

export default ColorsList;
