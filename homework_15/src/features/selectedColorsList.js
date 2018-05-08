import React from 'react';

class SelectedColorsList extends React.Component {

				renderList() {
								return this.props.list.map((item, i) => {
												if (i < 5) {
																return <div key = { item.id } className = "selected-color-item"
																style = { { 'backgroundColor': item.color } } > < span className = "material-icons"
																onClick = {
																				() => this.props.removeFromSelected(item) } > clear < /span></div >
												}
								});
				}


				render() {
								return <div className = "selected-colors" > {
																this.props.list.length > 0 ?
																this.renderList() :
																				<React.Fragment >
																				<div className = "no-selected first-box" > < /div>
																				<div className = "no-selected second-box" > < /div>
																				<div className = "no-selected third-box" > < /div>
																				</React.Fragment>
												} </div>
				}
}
export default SelectedColorsList;
