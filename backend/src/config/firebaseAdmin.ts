// import { ServiceAccount } from "firebase-admin";
import config from "./config";

type FirebaseAdminCredentials = {
  type: string,
  project_id: string,
  private_key_id: string,
  private_key: string,
  client_email: string,
  auth_uri: string,
  token_uri: string,
  auth_provider_x509_cert_url: string,
  client_x509_cert_url: string,
  universe_domain: string,
}

export interface ServiceAccount {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
  universe_domain: string;
}

const serviceAccount = {
  // type: "service_account",
  // project_id: "user-dashboard-app",
  projectId: "user-dashboard-app",
  // private_key_id: config.firebase.privateKeyId,
  // private_key: config.firebase.privateKey,
  privateKey: config.firebase.privateKey,
  // client_email: "firebase-adminsdk-68nt6@user-dashboard-app.iam.gserviceaccount.com",
  clientEmail: "firebase-adminsdk-68nt6@user-dashboard-app.iam.gserviceaccount.com",
  // client_id: "118011476835121665013",
  // auth_uri: "https://accounts.google.com/o/oauth2/auth",
  // token_uri: "https://oauth2.googleapis.com/token",
  // auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  // client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-68nt6%40user-dashboard-app.iam.gserviceaccount.com",
  // universe_domain: "googleapis.com"
}
export default serviceAccount;