export function convertToMinutes(number: number) {
  const minutes = Math.floor(number / 60000);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return hours + 'h ' + remainingMinutes + 'min';
}
