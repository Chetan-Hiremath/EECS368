console.log("Exercise 2.1: Looping a Triangle") //This line shows the name of Exercise 2.1.
for (let i = "o"; i.length <= 9; i+="o") //This line defines the for loop, which will run until the length of the the string is less than or equal to 9.
{
  console.log(i) //This line will print the triangle. 
}
console.log("\n") //This line creates a new line. 
console.log("Exercise 2.2: FizzBuzz") //This line shows the name of Exercise 2.2.
for (let i = 1; i <= 100; i++) //This line defines the for loop, which runs from 1 to 100.
{
  if (i % 21 == 0) //This line shows the if statement that works if the remainder of i and 21 is 0.
  {
    console.log("Divisible by both 3 and 7") //This line will print this statement if the condition's true.
  }
  else if (i % 3 == 0) //This line shows the else-if statement that works if the remainder of i and 3 is 0.
  {
    console.log("Divisible by 3") //This line will print this statement if the condition's true.
  }
  else if (i % 7 == 0) //This line shows the else-if statement that works if the remainder of i and 7 is 0.
  {
    console.log("Divisible by 7, but not 3") //This line will print this statement if the condition's true.
  }
  else //This line shows the else statement that works if the other statements are false.
  {
    console.log(i) //This line will print the numbers, not the statements.  
  }
}
console.log("\n") //This line creates a new line. 
console.log("Exercise 2.3: N-by-N Grid") //This line shows the name of Exercise 2.3.
let size = 6 //This line shows that a variable is already defined for the first size of the grid.
let size_2 = 12 //This line shows that a variable is already defined for the second size of the grid.
let grid = " " //This line shows that the variable is defined for the empty grid. 
let grid_2 = " "//This line shows that the variable is defined for the second empty grid.
for(let i = 0; i < size; i++) //This line defines the nested for loop, and the first loop runs from 0 to size.
{
  for(let j = 0; j < size; j++) //This line defines the second for loop that is inside the first for loop, which runs from 0 to size.
  {
    ((i+j) % 2 == 0 ? grid+= " ": grid += "*") //This line shows the conditional operator. If the remainder of the sum of i and j and 2 is 0, then it picks the empty space. If not, then it picks the asterisk.
  }
  grid+= "\n" //This line will create new lines for the grid until i is less than the size. 
}
console.log(grid) //This line will print the n-by-n grid for the first size variable. 
for(let i = 0; i < size_2; i++) //This line defines the nested for loop, and the first loop runs from 0 to size_2.
{
  for(let j = 0; j < size_2; j++) //This line defines the second for loop that is inside the first for loop, which runs from 0 to size_2.
  {
    ((i+j) % 2 == 0 ? grid_2+= " ": grid_2 += "*") //This line shows the conditional operator. If the remainder of the sum of i and j and 2 is 0, then it picks the empty space. If not, then it picks the asterisk.
  }
  grid_2+= "\n" //This line will create new lines for the second grid until i is less than the size_2. 
}
console.log(grid_2) //This line will print the n-by-n grid for the second size variable.
