// Check if a value is null or undefined
export const isNullOrUndefined = (value) => value === null || value === undefined;

// Check if an array is empty
export const isEmptyArray = (array) => Array.isArray(array) && array.length === 0;

// Check if an object is empty
export const isEmptyObject = (object) => 
  object && typeof object === 'object' && Object.keys(object).length === 0;
