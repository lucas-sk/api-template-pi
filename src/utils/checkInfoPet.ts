import { Gender } from '@prisma/client';

export function checkInfo(
  name?: string,
  idade?: number,
  sexo?: Gender,
  raca?: string,
  peso?: number,
  cor?: string,
): boolean {
  let isValid = false;

  if (!name) {
    isValid = true;
  }
  if (!idade) {
    isValid = true;
  }
  if (!sexo) {
    isValid = true;
  }
  if (!raca) {
    isValid = true;
  }
  if (!peso) {
    isValid = true;
  }
  if (!cor) {
    isValid = true;
  }

  return isValid;
}
