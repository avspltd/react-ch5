// react-ch5 - Copyright 2020 Chris Poole, AVSP Ltd
import { useState, useEffect } from 'react';

// declare the global CrComLib object 
declare var CrComLib: typeof import('@crestron/ch5-crcomlib');

export const useSubscribeDigital = (signalName:string) => {
  const [feedback, setFeedback] = useState(false);

  useEffect(() => {
    const subscriptionId = CrComLib.subscribeState('boolean', signalName, setFeedback);

    return () => {
      CrComLib.unsubscribeState('boolean', signalName, subscriptionId);
    }
  }, [signalName]);

  return feedback;
}

// alias
export const useSubscribeBoolean = useSubscribeDigital;

export const useSubscribeAnalog = (signalName:string) => {
  const [feedback, setFeedback] = useState(0);

  useEffect(() => {
    const id = CrComLib.subscribeState('number', signalName, setFeedback);

    return () => {
      CrComLib.unsubscribeState('number', signalName, id);
    }
  }, [signalName]);

  return feedback;
}

// alias
export const useSubscribeNumber = useSubscribeAnalog;

export const useSubscribeString = (signalName:string) => {
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const id = CrComLib.subscribeState('string', signalName, setFeedback);

    return () => {
      CrComLib.unsubscribeState('string', signalName, id);
    }
  }, [signalName]);

  return feedback;
}

export const usePublishDigital = (signalName:string) => {
  return (value: boolean) => CrComLib.publishEvent('boolean', signalName, value);
}

// alias
export const usePublishBoolean = usePublishDigital;

export const usePublishAnalog = (signalName:string) => {
  return (value: number) => CrComLib.publishEvent('number', signalName, value);
}

// alias
export const usePublishNumber = usePublishAnalog;

export const usePublishString = (signalName:string) => {
  return (value: boolean) => CrComLib.publishEvent('string', signalName, value);
}
