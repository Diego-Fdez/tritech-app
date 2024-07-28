export function handleFormatDate() {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const newDate = new Date();
  const formattedDate = newDate.toLocaleDateString('es-ES', options);

  return formattedDate;
}
