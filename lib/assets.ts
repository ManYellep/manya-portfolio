/** Public assets and plain anchors must include the optional GitHub Pages prefix. */
export const assetPath = (path:string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
