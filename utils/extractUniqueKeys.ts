export default function extractUniqueKeys(
  data: Array<object>,
  key: string
): Array<string> {
  const uniqueKeys = new Set<string>();
  data.forEach((item: any) => {
    uniqueKeys.add(item[key]);
  });
  return Array.from(uniqueKeys);
}
