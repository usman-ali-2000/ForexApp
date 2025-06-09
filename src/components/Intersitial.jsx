// components/Intersitial.js
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import { useEffect, useState } from 'react';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-2692954530817995/2410770796';

const interstitial = InterstitialAd.createForAdRequest(adUnitId);

export const useInterstitialAd = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadListener = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => setLoaded(true)
    );

    const closeListener = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setLoaded(false);
        interstitial.load(); // preload next
      }
    );

    interstitial.load();

    return () => {
      loadListener();
      closeListener();
    };
  }, []);

  const showAd = () => {
    if (loaded) {
      interstitial.show();
    }
  };

  return { showAd, loaded };
};
