const month = 3
// const month = "3" //if use sting than case can also string

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");        
        break;
    case 4:
        console.log("april");        
        break;

    default: // if forget to give break than all case prit but defualt is not print
        console.log("default raise");
        
        break;
}