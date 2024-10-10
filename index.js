function calculator(event) {
    event.preventDefault();

    let input1 = document.getElementById("input1").value 
    let input2 = document.getElementById("input2").value 
    let operator = document.getElementById("operator").value 
    let result;

    if (operator == "add") {
        result = Number(input1) + Number(input2)
        
    }else if (operator == "subtract") {
        result = Number(input1) - Number(input2)
        
    }else if (operator == "multiply") {
        result = Number(input1) * Number(input2)
        
    } else {
        result = Number(input1) / Number(input2)
    
    }
    let resultTag = document.getElementById("result")
    resultTag.innerHTML = `Result : ${result}`
    }