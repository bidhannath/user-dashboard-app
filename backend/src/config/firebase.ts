import config from "./config";
// firebaseConfig.ts
const firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  projectId: config.firebase.projectId,
  // storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: config.firebase.senderId,
  appId: config.firebase.appId,
};

export default firebaseConfig;
