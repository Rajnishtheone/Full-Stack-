//grade of student based on marks



function calculate_result(marks){
    if(marks>=90){
        return "A";
    }
    else if(marks>=80 && marks<90){
        return "B";
    }
    else if(marks>=70 && marks<80){
        return "C";
    }
    else if(marks>=60 && marks<70){
        return "D";
    }
    else{
        return "F";
    }
}

let grade = calculate_result(85);
console.log(grade);


