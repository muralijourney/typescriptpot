
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native-text-input-mask', () => { });
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock("@react-native-community/async-storage", () =>
  require("@react-native-community/async-storage/jest/async-storage-mock"),
);


jest.mock('@journeyid/client-react-native/sdks/typescript/client/src/react/hooks/useJourneyContext', () => {
  return {
    journey: {
      setOption: jest.fn(),
    }
  }
});

jest.mock('@journeyid/client/react/hooks/useJourneyContext', () => {
  return () => ({
    journey: {
      setOption: jest.fn(),
    }
  })
});


jest.mock('_services/iconService', () => ({
  getiOSIcon: jest.fn(() => Promise.resolve('k2bank')),

}));



jest.mock('@journeyid/client-react-native', () => { });

jest.mock('@journeyid/client-react-native/sdks/typescript/client/src/react/hooks/useStageCreditCardPayment', () => { });

jest.mock('@journeyid/microblink-cc-react-native', () => { });

jest.mock('@journeyid/client-react-native', () => {

})

jest.mock('@journeyid/microblink-cc-react-native', () => { });
jest.mock('@journeyid/microblink-id-react-native', () => { });

jest.mock('@journeyid/client-react-native/sdks/typescript/client/src/react/hooks/useStageDriversLicense', () => ({
  initiate: jest.fn(),
  submit: jest.fn(),

}));
jest.mock('@journeyid/facetec-react-native', () => ({
  launchFacial: jest.fn(),

}));
jest.mock('@journeyid/client-react-native/sdks/typescript/client/src/react/hooks/useStageFacialEnrollment', () => ({
  initiate: jest.fn(),
  submit: jest.fn(),

}));
jest.mock('@journeyid/client-react-native/sdks/typescript/client/src/react/hooks/useStageFacialAuthentication3d', () => ({
  initiate: jest.fn(),
  submit: jest.fn(),

}));
jest.mock('@journeyid/client-react-native/sdks/typescript/client/src/react/hooks/useStageForm', () => ({
  initiate: jest.fn(),
  submit: jest.fn(),

}));
jest.mock('@journeyid/client-react-native/sdks/typescript/client/src/react/hooks/useStageSocialSecurityNumber', () => ({
  initiate: jest.fn(),
  submit: jest.fn(),

}));
jest.mock('@journeyid/client-react-native/sdks/typescript/client/src/react/hooks/useStageBlank', () => ({
  submit: jest.fn(),

}));
jest.mock('@journeyid/client-react-native/sdks/typescript/client/src/react/hooks/useStageDeviceAuthentication', () => ({
  submit: jest.fn(),
  initiate: jest.fn(),
  timer: jest.fn(),

}));

jest.mock('@journeyid/client-react-native/sdks/bridge/hooks/useDeviceAuthentication', () => { });
jest.mock('@journeyid/client-react-native/sdks/typescript/client/src/react/hooks/useStageCreditCardPayment', () => { });
jest.mock('@journeyid/client-react-native/sdks/typescript/client/src/react/hooks/useStageDocumentSignature', () => { });



jest.mock('react-native-device-info', () => {
  return {
    getVersion: () => 4
  }
})



jest.mock('@react-native-firebase/messaging', () => {
  return () => ({
    hasPermission: jest.fn(() => Promise.resolve(true)),
    subscribeToTopic: jest.fn(),
    unsubscribeFromTopic: jest.fn(),
    requestPermission: jest.fn(() => Promise.resolve(true)),
    getToken: jest.fn(() => Promise.resolve('myMockToken')),
    onMessage: jest.fn(),
    onNotificationOpenedApp: jest.fn(),
    getInitialNotification: jest.fn(() => Promise.resolve(false))
  })
})


jest.mock('react-native-biometrics', () => {
  return () => ({
    isSensorAvailable: jest.fn(() => Promise.resolve(false)),
  })
})


jest.mock('@react-native-firebase/app', () => {
  return () => ({
    onNotification: jest.fn(),
    onNotificationDisplayed: jest.fn()
  })
})
jest.mock('@react-native-firebase/analytics', () => {
  analytics: jest.fn(() => ({
    logEvent: jest.fn(),
    setUserProperties: jest.fn(),
    setUserId: jest.fn(),
    setCurrentScreen: jest.fn(),
  }))
});


jest.mock('@react-native-firebase/crashlytics', () => {
  return () => ({
    log: jest.fn(),
    recordError: jest.fn(),
    // Any function you want to use or mock
  });
});


jest.mock('react-native-biometrics', () => {
  return {
    isSensorAvailable: jest.fn(function () {
      return Promise.resolve(false);
    })
  };
});



jest.mock('react-native-push-notification', () => ({
  configure: jest.fn(),
  onRegister: jest.fn(() => Promise.resolve(true)),
  onNotification: jest.fn(),
  addEventListener: jest.fn(),
  requestPermissions: jest.fn(),
}));

jest.mock('@react-native-community/async-storage', () => {
  return {
    getItem: async (...args) => args,
    setItem: async (...args) => args,
    removeItem: async (...args) => args,
  };
});