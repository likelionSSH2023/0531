const buttons = document.getElementsByClassName("container");
const result = document.getElementsByClassName("line");
function calculate(n1, operator, n2) {
    let result = 0;
    if(operator === '+') {
      result = Number(n1) + Number(n2); // '+'버튼을 눌렀을 때
    }
    else if(operator === '-') {
       result = Number(n1) - Number(n2); // '-'버튼을 눌렀을 때
    }
    else if(operator === '*') {
       result = Number(n1) * Number(n2); // '*'버튼을 눌렀을 때
    }
    if(operator === '/') {
       result = Number(n1) / Number(n2); // '/'버튼을 눌렀을 때
    }
    return String(result);
  }

  var num1 = "";
  var num2 = "";
  var op = "";

  var num1_dot = "";
  var num2_dot = "";
  var num1_info ="";

  var op_button;

  buttons[0].addEventListener('click',function(event){
    const target = event.target;
    if(target.classList.contains('number')){
        if(op == ""){
            if(num1_info == "answer"){
                num1 = "" + target.textContent;
                num1_info = "";
            }
            else{
                if(target.textContent == "."){
                    if(num1_dot == ""){
                        num1 = num1+target.textContent;
                        num1_dot = ".";
                    }
                }
                else{
                    num1 = num1+target.textContent;
                }
            }
        }
        if(op != ""){
            if(target.textContent == "."){
                if(num2_dot == ""){
                    num2 = num2+target.textContent;
                    num2_dot = ".";
                }
            }
            else{
                num2 = num2+target.textContent;
            }
        }
    }
    else if(target.classList.contains('sign')){
        if(num1 == ""){
            if(target.textContent = "-"){
                num1 = num1 + target.textContent;
            }
        }
        else if(op != "" && num2 == ""){
            if(target.textContent = "-"){
                num2 = num2 + target.textContent;
            }
        }
        else if(num1 != "" && num1 != "-" && op == ""){
            op = target.textContent;
            target.style.backgroundColor = "white";
            op_button = target;
        }
    }
    else if(target.classList.contains('erase')){

        if(op != ""){
            op_button.style.backgroundColor = "grey";
        }

        num1 = "";
        op = "";
        num2 = "";
        num1_dot = "";
        num2_dot = "";
    }


    if(target.classList.contains('answer')){
        if(num1 != "" && op != "" && num2 != ""){
            line =  calculate(num1,op,num2);
            num1 = line;
            num1_info = "answer";
            op = "";
            num2 ="";
            num1_dot = "";
            num2_dot = "";

            op_button.style.backgroundColor = "grey";
        }
    }
    else{
        line = num1 +" "+ op +" "+ num2;
    }
    result[0].innerText = line;
  })