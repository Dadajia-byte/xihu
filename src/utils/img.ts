export const getImg = (url: string) => {
  if (url.includes('http')) {
    return url
  } else return new URL(`../assets/images/${url}`, import.meta.url).href
}
