import React, { Component } from 'react';

function ColorsListItem(props, callback) {
				return (
								<div key = { props.id } className = "list-item"
								style = { { "backgroundColor": props.color } } >
								<div className = "add-icon"
								onClick = {
												() => callback(props) } > < span className = "material-icons" > add < /span>Add</div >
								</div>
				);
}

export default ColorsListItem;
