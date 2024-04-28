export const showLess = (num: number, desc: string) => {
    return desc.slice(0, num) + '...';
  };
  
  export const checkPasswordStrength = (password: string) => {
    let strength = 'very weak';
    let color = 'red';
  
    if (password.length >= 8) {
      strength = 'weak';
      color = '#c35252';
      if (/[A-Z]/.test(password)) {
        strength = 'medium';
        color = 'orange';
  
        if (/[!@#$%^&*(),.?":{}|<>0-9]/.test(password)) {
          strength = 'strong';
          color = 'green';
        }
      }
    }
  
    return { strength, color };
  };
  