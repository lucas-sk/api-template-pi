export function checkEmail(email: string): boolean {
  let isValid = false;
  const regexEmail = /^\S+@\S+\.\S+$/;

  if (!regexEmail.test(email)) {
    isValid = true;
  }

  return isValid;
}
