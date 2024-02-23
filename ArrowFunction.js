const punjabi = (amt,per)=>{

    return amt * per;
}

const gujarati = (amt,per)=>{

    return amt * per;

}

const SouthIndian = (amt,per)=>{

    return amt * per;
}

var  choice = "gujarati";

switch (choice) {
    case "punjabi":
            let x = punjabi(130,3)
            console.log("your total bill of punjabi " + x);
            break;

    case "gujarati":
            let y= gujarati(90,4)
            console.log("your total bill of Gujarati" +y);
            break;

    case "SouthIndian":
            let  z = SouthIndian(129,6)
            console.log("your total bill of south indian" + z);
            break;

    default:
            console.log("Eat vadapav");
        break;
}