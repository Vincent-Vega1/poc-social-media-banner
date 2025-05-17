
export function detectPlatform(userAgent: string): 'ios' | 'android' | null {
    if (/iPhone|iPad|iPod/i.test(userAgent)) return 'ios';
    if (/Android/i.test(userAgent)) return 'android';
    return null;
  }
  