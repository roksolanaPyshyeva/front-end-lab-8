import React from 'react';

class ColorsFilter extends React.Component {
				render() {
								return <input autoFocus className = "filter-input"
								placeholder = "Color's name, tags"
								onChange = {
												(event) => this.props.filterList(event.target.value) }
								/>
				}
}
export default ColorsFilter;
