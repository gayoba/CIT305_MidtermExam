// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyARtd0D7-CY_hm12q4YFKiygVgKRI2R5q4",
       authDomain: "firestore-crud.firebaseapp.com",
       databaseURL: "https://firestore-crud.firebaseio.com",
       projectId: "firestore-crud",
       storageBucket: "firestore-crud.appspot.com",
       messagingSenderId: "891445350967"
  }
};
