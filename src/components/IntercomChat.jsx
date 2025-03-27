import { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';

export const IntercomChat = ()=> {
  useEffect(() => {
    Intercom({
      app_id: 'c87p5i49', // Replace with your actual Intercom app ID
    });

    return () => {
      Intercom('shutdown'); // Cleanup on component unmount
    };
  }, []);

  return <div></div>;
}
