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