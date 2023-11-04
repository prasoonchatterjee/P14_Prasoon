function isStrongPassword(password) {
  if (!password?.length) return false;
  else if (password?.length < 8) {
    console.log('length');
    return false;
  } else if (password?.includes('password')) {
    console.log('password');
    return false;
  }

  for (let i = 0; i < password?.length; i++) {
    if (password[i] === password[i].toUpperCase()) {
      return true;
    } else {
      console.log('no uppercase');
      return false;
    }
  }
}

console.log(isStrongPassword());
console.log(isStrongPassword('password'));
console.log(isStrongPassword('Qwerty'));
console.log(isStrongPassword('qwerty123'));
console.log(isStrongPassword('Qwerty123'));
