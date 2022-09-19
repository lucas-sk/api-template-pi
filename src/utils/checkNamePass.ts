export function checkNamePass(name?: string, pass?: string): boolean {
  let isValid = false;

  if (!name) {
    isValid = true;
  }

  if (!pass) {
    isValid = true;
  }

  return isValid;
}
