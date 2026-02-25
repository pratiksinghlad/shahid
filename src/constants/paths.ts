export const BASE_PATH = "/";

export const getAssetPath = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_PATH}${cleanPath}`;
};
