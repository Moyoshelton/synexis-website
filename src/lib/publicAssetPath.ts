const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a root-relative public asset path for the current deployment. */
export function publicAssetPath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//") || !basePath) {
    return path;
  }

  if (path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
}
