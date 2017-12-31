export const imageAdd = (name, uri) => ({
  type: 'IMAGE_ADD',
  name,
  uri,
});

export const imageRemoveAll = () => ({
  type: 'IMAGE_REMOVE_ALL',
});
