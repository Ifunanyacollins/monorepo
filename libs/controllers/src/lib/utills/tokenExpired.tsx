function isTokenExpired(tokenExp: any) {
  if (!tokenExp) {
    return true;
  }

  const currentTime = Date.now().valueOf() / 1000; // Convert to seconds

  return tokenExp < currentTime;
}
