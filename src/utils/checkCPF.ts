export function checkCPF(CPF: string): boolean {
  let isValid = false;

  const regexCPF = /[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;

  if (!regexCPF.test(CPF)) {
    return (isValid = true);
  }
  return isValid;
}
