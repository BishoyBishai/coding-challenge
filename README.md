## coding challenge

The things we value the most in this test are readability, structure and simplicity of your solutions. We do not care which language you pick for the job, as long as it’s not some esoteric language like “whitespace”. Furthermore, if you assume anything, comment it in your code.

1. Create a method that, given a list of integers, returns the highest product between 3 of those numbers. Example:
   [1, 10, 2, 6, 5, 3] = 300
   Please provide tests that show your solution actually works.

2. You have this endpoint https://api.miconnexdev.com/test/1 which returns the results in this format:
   ` {
   id: number, //1
   value: number, //4
   children: number[] //[2,3,4,27]
   } `
   You should loop the children also and call the same api https://api.miconnexdev.com/test/{id} and get different results in the same format.
   Find the average value of all the parent/children of this tree if you start from id=1.
