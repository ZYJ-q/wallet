export function getRpcUrl() {
  // This should run in the browser only. Without this check, the build fails.
  if (typeof window === 'undefined') {
    return '';
  }
  console.log('rpc111111111111111111111111111111');

  return `/api/rpc`;
}
