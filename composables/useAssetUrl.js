export function useAssetUrl(path) {
  const config = useRuntimeConfig();
  return `${config.app.baseURL}${path}`;
}
