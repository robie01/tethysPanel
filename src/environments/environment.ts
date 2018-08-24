// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDTQ8J5TWo4-fT83jTghcp-FIBmAo1VtF8',
    authDomain: 'tethys-adminpanel.firebaseapp.com',
    databaseURL: 'https://tethys-adminpanel.firebaseio.com',
    projectId: 'tethys-adminpanel',
    storageBucket: 'tethys-adminpanel.appspot.com',
    messagingSenderId: '151425827738'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
