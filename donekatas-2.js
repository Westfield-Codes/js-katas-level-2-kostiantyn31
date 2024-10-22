/* AGE KATA */
main();
/* Var, Alert, Prompt, Function */

/* FUNCTION main() 
 * Facebook wants to check if you're 13, so they ask your birth year 
 * set age = "How old are you?"
 * then set born = asking "What year were you born?"
 * If myAge(age) is not equal to born, say, "Underaged", otherwise "Welcome!"
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main() {
    let age = prompt("How old are you?");
    let born = prompt("What year were you born?");
    if (maAge(age) != born ) alert("Underaged");
    else alert("Welcome!");
}

/* FUNCTION myAge(age)
 * define a function called myAge with number parameter age
 * Get thisYear using the date function https://www.w3schools.com/js/js_date_methods.asp
 * set birthYear as thisYear minus age and return that
 * @param: age (integer)
 * @return: born (year)
 */
function myAge(age) {
    //let thisYear = 
    let today = new Date();
    let thisYear = today.getFullYear();
    let birthYear = thisYear - age;
    return birthYear;
}


/* PET KATA */
main();
/* Var, Alert, Prompt, Function, Global */

/* FUNCTION main()  
 * Ask for the name of a dog (dogName)
 * Ask how many cups of food they get each meal (cups)
 * call feedDog with parameters dogName, cups
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main() {
    let dogName = prompt("What is your dog's name?");
    let cups = prompt("How many cups of food do you give for each meal?");
    feedDog(dogName, cups);
}

/* FUNCTION feedDog(dogName, cups) */
/* define a function called feedDog with string parameter dogName, number parameter cups
 * loop from cup = 1 to cups.  For each cup, display "Here's a cup of kibble, [dogName]!"
 * @param: dogName (string), cups (integer)
 * @return: none
 */ 
function feedDog(dogName, cups) {
    let cup = 0;
    while (cup < cups) {
        alert("Here's a cup of kibble, " + cups + "!");
        cup++;
    }
}