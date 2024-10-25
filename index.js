/// exporting and importing files 


export function sayHello() {
    console.log("Hello this a module lab practice to import and export modules")

}

sayHello();

export default function callMe() {
    alert("This is an alert")
}

// callMe()

export default function monthOfYear() {
    let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months;

}

monthOfYear();

