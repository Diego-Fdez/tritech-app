export function validateEmptyFields(
  title: string,
  userId: string,
  clientId: string
) {
  if (title.length === 0) {
    throw new Error('Debes ingresar el título del formulario.');
  } else if (userId.length === 0) {
    throw new Error('No pudimos obtener tu ID.');
  } else if (clientId.length === 0) {
    throw new Error('Debes seleccionar un cliente.');
  }
}
