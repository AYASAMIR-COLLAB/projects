
function insert(num) {
    var mystring = document.form.textview.value;
    var lastChar = mystring.charAt(mystring.length - 1);
    
    if (mystring.length < 30) {
        if (!isNaN(lastChar) || lastChar == '' || lastChar == null || !isNaN(num)) {
            document.form.textview.value = mystring + num;
        } else if (num != lastChar) {
            
        
            if (isOperator(lastChar) && isOperator(num)) {
                document.form.textview.value = mystring.substring(0, mystring.length - 1) + num;
            } else {
                document.form.textview.value = mystring + num;
            }
        }
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}


function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        try {
           
            exp = exp.replace(/÷/g, '/').replace(/×/g, '*');
            document.form.textview.value = eval(exp);
        } catch (e) {
            document.form.textview.value = "خطأ";
        }
    }
}

function clean() {
    document.form.textview.value = '';
}


function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function toggleSign() {
    var exp = document.form.textview.value;
    if (exp) {
        if (exp.charAt(0) === '-') {
            document.form.textview.value = exp.substring(1);
        } else {
            document.form.textview.value = '-' + exp;
        }
    }
}