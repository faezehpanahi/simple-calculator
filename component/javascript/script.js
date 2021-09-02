let output_answer = document.getElementById('output_answer');
let operation ;
let first_number;
let second_number;

function numbers_value(number) {
    if (output_answer.innerHTML.length < 9) {
        if(output_answer.innerHTML === "0" ){
            output_answer.innerHTML = "";
            output_answer.innerHTML += number;
        }
        // else if (operation) {
        //     output_answer.innerHTML = "";
        //     output_answer.innerHTML += number;
        // }
        else{
            output_answer.innerHTML += number;
        }
    }
    else {
        output_answer.innerHTML;
        alert("can not enter more than 9 digit!");
    }
}

function operand_value(operand){
    if(output_answer.innerHTML === "0"){
        output_answer.innerHTML;
    }
    else {       
        operation = operand;
        first_number = parseFloat(output_answer.innerHTML);
        output_answer.innerHTML = "";
    }
}

function clear_value(){
    if(output_answer.innerHTML === "0"){
        output_answer.innerHTML;
    }
    else{
        output_answer.innerHTML = '0';
    }  
}

function result(){
    let result_calculation;

    if(output_answer.innerHTML === "0"){
        output_answer.innerHTML;
    }
    else{
        second_number = parseFloat(output_answer.innerHTML);       
        switch(operation){
            case "+":
                result_calculation = first_number + second_number;
                break;
            case "-":
                result_calculation = first_number - second_number;

                break;
            case "*":
                result_calculation = first_number * second_number;
                break;
            case "/":
                result_calculation = first_number / second_number;
                break;
        }
     
        if (result_calculation.toString().length > 9) {
            result_calculation = result_calculation.toExponential(8);
            output_answer.innerHTML = result_calculation;
        }
        else {
            output_answer.innerHTML = result_calculation;
        }
    }
    
}


