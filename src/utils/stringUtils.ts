export const shorten = (text = "", maxLength = 20) => {
  return `${text.slice(0, maxLength)}...`
}
