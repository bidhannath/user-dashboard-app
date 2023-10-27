// custom-types.d.ts
// import { DefaultSession } from "next-auth";
// import { SessionProviderProps } from "next-auth/react";

// declare module 'next-auth' {
//   export interface Session extends DefaultSession {
//     user?: {
//       name?: string | null
//       email?: string | null
//       image?: string | null
//     }
//     expires?: ISODateString; // Making 'expires' optional
//   }
// }

// declare module 'next-auth/react' {
//   export interface SessionProviderProps {
//     children: React.ReactNode;
//     session?: any;
//     baseUrl?: string;
//     basePath?: string;
//     /**
//      * A time interval (in seconds) after which the session will be re-fetched.
//      * If set to `0` (default), the session is not polled.
//      */
//     refetchInterval?: number;
//     /**
//      * `SessionProvider` automatically refetches the session when the user switches between windows.
//      * This option activates this behaviour if set to `true` (default).
//      */
//     refetchOnWindowFocus?: boolean;
//     /**
//      * Set to `false` to stop polling when the device has no internet access offline (determined by `navigator.onLine`)
//      *
//      * [`navigator.onLine` documentation](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine)
//      */
//     refetchWhenOffline?: false;
// }
// }
