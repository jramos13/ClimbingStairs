/*  Climbing Stairs
  
    You're a rebel scout on the ice planet, Hoth. While killing time waiting for the Empire to find your base, you ride your trusty Tauntaun around the plant. 
    You wander upon a very tall ice staircase leading up a mountainside that takes n steps to reach. Having plenty of time on your hands, you decide you want to figure out how many ways are there to reach the top. 
    The catch is that for each step, your Tauntauan can only climb 1 or 2 steps at a given time.

    Your job is to write a function 'climbingStairs' that will return the total number of ways you can reach the top.

    'climbingStairs' should take the following parameter:

    totalSteps: an integer, total n steps to the top.

    Constraints:

    0 <= totalSteps < infinity

    For each given step, you can only take 1 or 2 steps at a time

    Sample Input:

    Given: 2

    Output: 2

    There are two ways to the top (1 + 1) and (2).

    Sample Input:

    Given: 3

    Output: 3

    There are three ways to the top (1 + 1 + 1), (1 + 2), and (2 + 1). 

*/


/*  NOTES
 *  
 *  n number of steps
 *  
 *  output is the addition of the previous 2 ways
 *  
 *  n = 0 > 0
 *  n = 1 > 1
 *  n = 2 > 2
 *  n = 3 > 3
 *  -------------------- return total steps up to 3
 *  n = 4 > 5    ------- Equals addition of previous 2 -> fibonnaci sequence?
 *  n = 5 > 8
 *  n = 6 > 13
 *  
 */


// Test case for 0 totalSteps
console.log("0 steps: " + climbingStairs(0));
console.log("Number of stairs should be 0")

// Test case for 1 totalSteps
console.log("1 steps: " + climbingStairs(1));
console.log("Number of stairs should be 1")

// Test case for 3 totalSteps
console.log("3 steps: " + climbingStairs(3));
console.log("Number of stairs should be 3")

// Test case for 4 totalSteps
console.log("4 steps: " + climbingStairs(4));
console.log("Number of stairs should be 5")

//Test case for 20 totalSteps
console.log("20 steps: " + climbingStairs(20));

//Test case for 100 totalSteps
console.log("100 steps: " + climbingStairs(100));

function climbingStairs(totalSteps) {
    if (totalSteps < 4) return totalSteps;

    var back2 = 1;
    var back1 = 2;

    // if totalSteps is 4 or greater keep track of the last 2 numbers and add them until you reach total number of steps
    for (var i = 2; i < totalSteps; i++) {
        var currentSteps = back2 + back1;
        back2 = back1;
        back1 = currentSteps;
    }

    return currentSteps;
}