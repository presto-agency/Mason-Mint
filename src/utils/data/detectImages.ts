import { ImagesProps } from '@/utils/types'

const placeholder = [
  '/uploads/64b7f086ffe22650abb77fc5/1-oz-American-Revolution-Round-Antique-Obverse-Max.png',
  '/uploads/64b7f086ffe22650abb77fc5/1-oz-American-Revolution-Round-Antique-Reverse-Max.png',
]
const currentSite = 'masonmint.com'

export const detectImages = (array: ImagesProps[] | undefined, order = 0) => {
  if (
    array?.length &&
    array[order]?.ImageUrl &&
    !array[order]?.ImageUrl?.includes(currentSite)
  ) {
    return array[order].ImageUrl
  }
  return placeholder[order]
}

export const detectImage = (obj: ImagesProps | undefined, order = 0) => {
  if (obj?.ImageUrl && obj?.ImageUrl.includes(currentSite)) {
    return placeholder[order]
  }

  return obj?.ImageUrl
}
