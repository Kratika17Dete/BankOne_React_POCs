import { Capacitor } from "@capacitor/core";

export const showSecurityWarning = () => {
  if (Capacitor.isNativePlatform()) {
    return;
  }

  console.clear();

  console.log(
    "%cSTOP!",
    "color:red;font-size:72px;font-weight:bold;font-family:Arial;"
  );

  console.log(
    "%cThis is a browser feature intended for developers.",
    "color:red;font-size:22px;font-weight:bold;font-family:monospace;"
  );

  console.log(
    "%cNever paste code here. Bank employees will never ask you to do this.",
    "color:red;font-size:20px;font-family:monospace;"
  );
};