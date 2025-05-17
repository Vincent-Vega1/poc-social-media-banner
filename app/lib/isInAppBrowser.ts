export function isInAppBrowser(userAgent: string): boolean {
    const inAppPatterns = [/Instagram/, /FBAN/, /Messenger/, /Twitter/, /TikTok/];
    return inAppPatterns.some((regex) => regex.test(userAgent));
  }