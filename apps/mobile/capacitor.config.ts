import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.reson.mobile",
  appName: "reson-mobile",
  webDir: "../web/dist",
  bundledWebRuntime: false,
  server: {
    cleartext: true,
  },
};

export default config;
