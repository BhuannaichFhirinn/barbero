// Perform a deep equality check between two values
export const isEqual = (a, b) => {
    if (a === b) return true;
  
    if (typeof a !== typeof b) return false;
  
    if (typeof a === 'object' && a !== null && b !== null) {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
  
      if (keysA.length !== keysB.length) return false;
  
      for (const key of keysA) {
        if (!keysB.includes(key) || !isEqual(a[key], b[key])) {
          return false;
        }
      }
  
      return true;
    }
  
    return false;
  };
  
  // Perform a strict equality check between two values
  export const isStrictEqual = (a, b) => Object.is(a, b);
  