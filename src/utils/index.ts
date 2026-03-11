export function createPageUrl(pageName: string) {
  const slug = pageName.trim().replace(/ /g, "-").toLowerCase();
  return slug ? `/#/${slug}` : "/#/";
}
