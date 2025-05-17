import Image from "next/image";
import styles from "./page.module.css";
import AppBanner from "./components/AppBanner";
import { detectPlatform } from "./lib/detectPlatform";
import { headers } from 'next/headers';
import { AppLinks } from "next/dist/lib/metadata/types/extra-types";
import { isInAppBrowser } from "./lib/isInAppBrowser";
import { appLinks } from "./lib/AppLinks";


export default async function Home() {

  //no localization/languages, no real smart banner styling
  //also idk if we need to consider that some logic runs an every page request, or if we can somehow only run the logic when the first request in a session starts.

  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const inApp = isInAppBrowser(userAgent);
  const platform = detectPlatform(userAgent);

  //console.log('User Agent:', userAgent);
  //console.log('Platform:', platform);
  //console.log('inApp?:', inApp);

  return ( //the whole thing needs to sit in the layout or somewhere more global propably.
    <div>
    <meta name="smartbanner:title" content="Smart Application"></meta>
    {inApp && platform && <AppBanner platform={platform} appLinks={appLinks} />}
    {/* rest of your page */}
  </div>
  );
}
