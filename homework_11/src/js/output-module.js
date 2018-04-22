import style from '../styles/styles.css';
import calculate from './calculating-module';
import view from './interface-module';
import $ from "jquery";

view.init();
view.render();
$('.button0').on('click', function(){
    			let firstNumber = parseInt($('#first-input').val());
    			let secondNumber = parseInt($('#second-input').val());
    			let result = calculate.add(firstNumber, secondNumber);
    			$('#result-input').val(result);
    		});

$('.button1').on('click', function(){
    			let firstNumber = parseInt($('#first-input').val());
    			let secondNumber = parseInt($('#second-input').val());
    			let result = calculate.subtract(firstNumber, secondNumber);
    			$('#result-input').val(result);
    		});
$('.button2').on('click', function(){
    			let firstNumber = parseInt($('#first-input').val());
    			let secondNumber = parseInt($('#second-input').val());
    			let result = calculate.multiply(firstNumber, secondNumber);
    			$('#result-input').val(result);
    		});
$('.button3').on('click', function(){
    			let firstNumber = parseInt($('#first-input').val());
    			let secondNumber = parseInt($('#second-input').val());
    			let result = calculate.divide(firstNumber, secondNumber);
    			$('#result-input').val(result);
    		});
$('.clear-button').on('click', function(){
    			$('#first-input').val('');
    			$('#second-input').val('');
    			$('#result-input').val('');
    		});

