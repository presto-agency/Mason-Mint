export const toLowerCaseAndRemoveSpaces = (string: string) => {
  return string.toLowerCase().trim().replace(/\s/g, '')
}
