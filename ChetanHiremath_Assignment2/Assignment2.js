class Group //This line shows the name of the class, which is the Group Class. This class defines the functions of the Set Theory and returns the correct outputs in the terminal.
{
   constructor() //This line defines the constructor of the Group Class.
   {
       this.elements = [] //This line creates an empty array of a defined group.
   }
   has (value) //This line defines the has function of the Group Class.
   {
       for (let i = 0; i < this.elements.length; i++) //This line defines the for loop, which will run from 0 to the length of the array, for this function.
       {
           if (this.elements[i] == value) //This line shows the if statement that works if one of the elements in the array is equal to the value.
           {
               return true //This line returns true if the statement is true.
           }
       }
       return false //This line returns false if the statement is false.
   }
   add (value) //This line defines the add function of the Group Class.
   {
       if (!this.has(value)) //This line shows the if statement that works if the value is not present in the array.
       {
           this.elements.push(value) //This line pushes or adds the value to the end of the array.
       }
   }
   delete (value) //This line defines the delete function of the Group Class.
   {
       for(let i = 0; i < this.elements.length; i++) //This line defines the for loop, which will run from 0 to the length of the array, for this function.
       {
           if (this.elements[i] == value) //This line shows the if statement that works if one of the elements in the array is equal to the value.
           {
               this.elements[i] = this.elements[this.elements.length-1] //This line shows that the targeted element will be equal to the second to last element in the array.
               this.elements.pop() //This line pops or removes the value in the array.
           }
       }
   }
   union (otherGroup) //This line defines the union function of the Group Class.
   {
        let unionGroup = new Group() //This line shows that the variable is defined for a new object.
        for (let i = 0; i < this.elements.length; i++) //This line defines the for loop, which will run from 0 to the length of the array, for this function.
        {
           unionGroup.add(this.elements[i]) //This line uses the add function that adds the elements in the array.
        }
        for (let i = 0; i < otherGroup.elements.length; i++) //This line defines the for loop, which will run from 0 to the length of the array, for this function.
        {
           unionGroup.add(otherGroup.elements[i]) //This line uses the add function that combines the elements of arrays of 2 objects. If there are several occurences of a value, then there will be one occurence of that certain value in the array only.
        }
        return unionGroup //This line returns the new array that has the values of arrays of 2 objects.
   }
   intersection (otherGroup) //This line defines the intersection function of the Group Class.
   {
       let intersectionGroup = new Group() //This line shows that the variable is defined for a new object.
       for (let i = 0; i < this.elements.length; i++) //This line defines the for loop, which will run from 0 to the length of the array, for this function.
       {  
           if (otherGroup.has(this.elements[i])) //This line shows the if statement that works if the group's array elements and the other group's array elements are same.
           {
               intersectionGroup.add(this.elements[i]) //This line uses the add function that combines the common elements of arrays of 2 objects. If there are several occurences of a value, then there will be one occurence of that certain value in the array only.
           }
       }
       return intersectionGroup //This line returns the new array that has the values of arrays of 2 objects.
   }
   difference (otherGroup) //This line defines the difference function of the Group Class.
   {
       let differenceGroup = new Group() //This line shows that the variable is defined for a new object.
       for (let i = 0; i < this.elements.length; i++) //This line defines the for loop, which will run from 0 to the length of the array, for this function.
       {
           if (!otherGroup.has(this.elements[i])) //This line shows that if statement that works if the group's array elements and the other group's array elements are not same.
           {
               differenceGroup.add(this.elements[i]) //This line uses the add function that shows the elements of arrays of 2 objects when those elements are not same.
           }
       }   
       return differenceGroup //This line returns the new array that has the values of the arrays of 2 objects.
    }
} 

let group1 = new Group() //This line shows that the first variable is defined for the first group and its array.
let group2 = new Group() //This line shows that the second variable is defined for the second group and its array.
group1.add(1) //This line uses the add function that adds 1 in the array of the first group.
group1.add(2) //This line uses the add function that adds 2 in the array of the first group.
group1.add(3) //This line uses the add function that adds 3 in the array of the first group.
console.log(group1) //The line prints this array of the first group after it adds the values in that array.
group2.add(2) //This line uses the add function that adds 2 in the array of the second group.
group2.add(3) //This line uses the add function that adds 5 in the array of the second group.
group2.add(5) //This line uses the add function that adds 2 in the array of the second group.
group2.add(2) //This line uses the add function that adds 2 in the array of the second group. Since 2 is already added in the array, 2 will be present in the array.
console.log(group2) //This line prints this array of the second group after it adds the values in that array.
console.log(group1.has(5)) //This line prints true if one of the elements of the array of the first group has 5. If not, then it prints false.
console.log(group2.has(3)) //This line prints true if one of the elements of the array of the second group has 3. If not, then it prints false.
console.log(group1.union(group2)) //This line prints the union array of the elements of the arrays of 2 objects.
console.log(group1.intersection(group2)) //This line prints the intersection array of the elements of the arrays of 2 objects.
console.log(group1.difference(group2)) //This line prints the difference of the elements of the arrays of 2 objects.
group1.delete(1) //This line uses the delete function to delete 1 in the array of the first group.
console.log(group1) //This line prints the updated array of the first group when the delete function is used.
group2.delete(1) //This line uses the delete function to delete 1 in the array of the second group.
console.log(group2) //This line prints the updated array of the second group when the delete function is used.