/**
 * 获取assets文件
 * @param url 文件路径
 * @returns {string}
 */
export function getAssetsFile(url: string) {
  // @ts-ignore
  return new URL(`../assets/${url}`, import.meta.url).href
}
