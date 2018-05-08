import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';
import ColorsList from './features/colorsList';
import ColorsFilter from './features/colorsFilter';
import SelectedColorsList from './features/selectedColorsList';
import ColorsAmount from './features/colorsAmount';


class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
    	currentColorsList: [],
     	colorsList: [],
      selectedColors: [],
      inputValue: ""
    };
    this.addToSelectedList = this.addToSelectedList.bind(this);
    this.removeFromSelectedList = this.removeFromSelectedList.bind(this);
    this.filterColorsList = this.filterColorsList.bind(this);
  }

  componentDidMount() {
		fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
		.then(results => {
			return results.json();
		}).then(data => {
			console.log(data);
			let arr = data;
      		this.setState({
      			colorsList: data,
       			currentColorsList: data
      		});
		})
	}

	addToSelectedList(color){
		if(this.state.selectedColors.length < 10){
			let index = this.state.colorsList.indexOf(color);
			let newSelectedColors = this.state.selectedColors;
			let newList = this.state.colorsList;
			newList.splice(index, 1);
	    newSelectedColors.push(color);
	    this.setState({
	      selectedColors: newSelectedColors,
	     	colorsList:newList
	    });
		}
		this.filterColorsList(this.state.inputValue);
	}
	removeFromSelectedList(color){
		let selectedIndex = this.state.selectedColors.indexOf(color);
		let newSelectedColors = this.state.selectedColors;
		let newList = this.state.colorsList;
		newSelectedColors.splice(selectedIndex, 1);
		newList.splice((color.id-1), 0, color);
		newList.sort(function(a, b) {
      			return (a.id - b.id);
    		});
		this.setState({
	      	selectedColors: newSelectedColors,
	      	colorsList:newList
	    });
	  this.filterColorsList(this.state.inputValue);

	}
	filterColorsList(inputValue) {
		var updatedList = this.state.colorsList;
    updatedList = updatedList.filter(function(item){
      var isFind = false;
      item.tags.forEach((el) => {
          if(el.indexOf(inputValue) !== -1) {
            isFind = true;
          };
      });
      return isFind === true
    });
    this.setState({
	        currentColorsList: updatedList,
	        inputValue: inputValue
	    });
  	}

  render() {
    return (
    	<div>
    		<ColorsFilter filterList = {this.filterColorsList} />
    		<SelectedColorsList list={this.state.selectedColors} removeFromSelected = {this.removeFromSelectedList} />
      	{this.state.colorsList.length>0 ?
      		<React.Fragment>
      			<ColorsAmount amount = {this.state.currentColorsList.length}/>
      			<ColorsList list={this.state.currentColorsList} addToSelected={this.addToSelectedList}/>
      		</React.Fragment> : <div className ="loading">Loading...</div>
      	}

      	</div>
    );
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);
