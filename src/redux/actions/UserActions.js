export const imageAdd = (image: string) => ({
  type: 'IMAGE_ADD',
  image,
});

export const imageRemoveAll = () => ({
  type: 'IMAGE_REMOVE_ALL',
});
