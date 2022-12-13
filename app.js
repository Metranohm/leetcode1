//1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target) {
  // Create a map to store the indices of each element in the array
  const map = new Map();

  // Iterate over the array of numbers
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current number, which is the number we
    // need to add to it to get the target
    const complement = target - nums[i];

    // Check if the complement exists in the map
    if (map.has(complement)) {
      // If the complement exists, return the indices of the current number and
      // the complement
      return [map.get(complement), i];
    }

    // If the complement does not exist, add the current number and its index
    // to the map
    map.set(nums[i], i);
  }

  // If we didn't find any pair that adds up to the target, return an empty array
  return [];
}

//2. Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x) {
  // Convert the number to a string
  var str = x.toString();

  // Reverse the string
  var reversedStr = str.split('').reverse().join('');

  // Check whether the reversed string is equal to the original string
  return str === reversedStr;
}

