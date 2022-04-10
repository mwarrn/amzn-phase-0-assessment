// 1. Write your functions here
const katzDeli = [];

/* 
input: array
output: returns string containing everyone with their current place in line
side effects: If there is nobody in line, it should say "The line is
currently empty."
*/
function line(customers) {
    let status = "The line is currently: ";
    if (customers.length === 0) {
        console.log("The line is currently empty.");
    }
    else {
        for (let i = 0; i < customers.length; i++) {
            status += [i+1] + ". " + customers[i] + " "; 
        }
        console.log(status);
    }
}

/* 
input: array for the current line of people (katzDeli) and a string of the person
joining the end of the line
output: n/a
side effects: call out (console.log()) the person's name along with their position
in line.
top-tip: Remember that people like to count from 1, not from 0 ("zero") like
computers. */
function takeANumber(customers, newCustomer) {
    customers.push(newCustomer);
    console.log("Welcome, " + newCustomer + ". You are number " + customers.length + " in line.");
}

/* 
input: array for the current line of people
output: call out (i.e. console.log()) the next person in line and then remove them
from the front. 
side effects: If there is nobody in line, it should call out (console.log()) that
"There is nobody waiting to be served!". */
function nowServing(customers) {
    if (customers.length > 0) {
        console.log("Currently serving " + customers.shift() + ".");
    }
    else {
        console.log("There is nobody waiting to be served!");
    }
}

// 2. Example Usage
line(katzDeli) //=> "The line is currently empty."
takeANumber(katzDeli, "Ada") //=> "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeli, "Grace") //=> "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeli, "Kent") //=> "Welcome, Kent. You are number 3 in line."
line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"
nowServing(katzDeli) //=> "Currently serving Ada."
line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"
takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.
line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"
nowServing(katzDeli) //=> "Currently serving Grace."
line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"
nowServing(katzDeli) //=> "Currently serving Kent."
nowServing(katzDeli) //=> "Currently serving Matz."
nowServing(katzDeli) //=> "There is nobody waiting to be served!"
