function factorial(n) {
    if (n < 0) return "Invalid! Factorial of negative number doesn't exist.";
  
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  