// Check if a value is null or undefined
export const isNullOrUndefined = (value) => value === null || value === undefined;

// Checks if a value is undefined, null, NaN, an empty string, array, or object.
export const isUndefinedNullOrEmpty = (object) => {
  if (object === undefined || object === null || Number.isNaN(object)) return true;
  if (typeof object === 'string' && object.trim().length === 0) return true;
  if (Array.isArray(object) && object.length === 0) return true;
  if (typeof object === 'object' && object.constructor === Object && Object.keys(object).length === 0) return true;
  return false;
}

// Check if an array is empty
export const isEmptyArray = (array) => Array.isArray(array) && array.length === 0;

// Check if an object is empty
export const isEmptyObject = (object) => 
  object && typeof object === 'object' && Object.keys(object).length === 0;
