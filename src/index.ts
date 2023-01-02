const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

// Code this
// Inferred as 2-length tuple
const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);

// But not that
// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
/* const args = [8, 5];
const angle = Math.atan2(...args); */
