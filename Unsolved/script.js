var x = 50;
var expression1 = x < 25;
var expression2 = x > 50;

console.log (x<25);
console.log (x>50);

if (expression1 && expression2) {
    console.log('T T');
} else if (expression1) {
    console.log('T F');
} else if (expression2) {
    console.log('F T');
} else {
    console.log('F F');
}

//switch statment//
var month = 'Aprial';
switch(month){
    case 'May':
        console.log('Lucky month is May');
        break;
        case 'Aprial':
            console.log('Lucky month is Aprial');
            break;
            case 'June':
                console.log('Lucky month is June');
                break;
                default:
                    console.log('Happy New Year');
                    break;
};

console.log("pick one of the following colors: yellow,green,red or pink");
var color = console.log();

switch (color){
    case "yellow":
        console.log("Youu picked yellow");
        break;
        case "red":
            console.log("Youu picked green");
            break;
            case "pink":
                console.log("Youu picked red");
                break;
                default:
                    console.log("Youu did not pick from the colors provided.");
                    break;

}


// This is regular way:

var x = prompt("Choose any number");
switch(true){
    case x == 45:
      console.log("True ✅ True ✅");
      break;

    case x < 45:
        console.log("Ture✅ False❌");
        break;

    case x > 45:
        console.log("False❌ True✅"); 
        break;

        default:
            console.log("False ❌ False ❌");
}

// This is the shortest way:

var mark = prompt ("Enyer your mark");
switch (true){
    case(mark >= 40):
    console.log("youu pass")
    break;
    case mark >= 80:
        console.log("you got A+");
        break;
    default:
        console.log("youu fill");
        break; 
}

