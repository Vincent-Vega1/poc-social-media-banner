'use client';
import { useEffect, useState } from 'react';
import './AppBanner.css';

type Platform = 'ios' | 'android';

type AppLinks = {
  ios: string;
  android: string;
};

type AppBannerProps = {
  platform: Platform | null;
  appLinks: AppLinks;
};

export default function AppBanner({ platform, appLinks }: AppBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('hideAppBanner');
    if (!dismissed && platform) {
      setVisible(true);
    }
  }, [platform]);

  const handleClose = () => {
    localStorage.setItem('hideAppBanner', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="app-banner">
    <div className="app-banner__text">
        <p className="app-banner__title">Get our app</p>
        <p className="app-banner__subtitle">Experience the best version on your device</p>
    </div>
    <div className="app-banner__actions">
        {platform && (
        <a
            href={appLinks[platform]}
            className="app-banner__button"
            target="_blank"
            rel="noopener noreferrer"
        >
            Open
        </a>
        )}
        <button onClick={handleClose} className="app-banner__close">✕</button>
    </div>
    </div>
  );
}
