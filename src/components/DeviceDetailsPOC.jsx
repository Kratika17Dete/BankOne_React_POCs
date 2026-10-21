import React, { useEffect, useState } from "react";

const DeviceDetailsPOC = () => {
  const [device, setDevice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  // --------------------------------------------------
  // Generate / Get Application Device ID
  // --------------------------------------------------

  const getDeviceId = () => {
    let deviceId = localStorage.getItem("bankOneDeviceId");

    if (!deviceId) {
      deviceId = crypto.randomUUID
        ? crypto.randomUUID()
        : `device-${Date.now()}-${Math.random()
            .toString(36)
            .substring(2, 10)}`;

      localStorage.setItem("bankOneDeviceId", deviceId);
    }

    return deviceId;
  };

  // --------------------------------------------------
  // Detect Operating System
  // --------------------------------------------------

  const getOperatingSystem = () => {
    const userAgent = navigator.userAgent;

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    if (/iphone|ipad|ipod/i.test(userAgent)) {
      return "iOS";
    }

    if (/windows/i.test(userAgent)) {
      return "Windows";
    }

    if (/macintosh|mac os x/i.test(userAgent)) {
      return "macOS";
    }

    if (/linux/i.test(userAgent)) {
      return "Linux";
    }

    return "Unknown";
  };

  // --------------------------------------------------
  // Detect Device Type / Name
  // --------------------------------------------------

  const getDeviceName = () => {
    const userAgent = navigator.userAgent;

    if (/iphone/i.test(userAgent)) {
      return "iPhone";
    }

    if (/ipad/i.test(userAgent)) {
      return "iPad";
    }

    if (/android/i.test(userAgent)) {
      return "Android Device";
    }

    if (/windows/i.test(userAgent)) {
      return "Windows Device";
    }

    if (/macintosh|mac os x/i.test(userAgent)) {
      return "Mac Device";
    }

    if (/linux/i.test(userAgent)) {
      return "Linux Device";
    }

    return "Unknown Device";
  };

  // --------------------------------------------------
  // Detect Manufacturer
  // --------------------------------------------------

  const getManufacturer = () => {
    const userAgent = navigator.userAgent;

    if (/iphone|ipad|ipod/i.test(userAgent)) {
      return "Apple";
    }

    if (/samsung|sm-/i.test(userAgent)) {
      return "Samsung";
    }

    if (/pixel/i.test(userAgent)) {
      return "Google";
    }

    return "Not Available";
  };

  // --------------------------------------------------
  // Detect Model
  // --------------------------------------------------

  const getModel = () => {
    const userAgent = navigator.userAgent;

    // Android model can sometimes appear in User Agent
    const androidModel = userAgent.match(
      /Android.*?;\s*(.*?)\s*(?:Build|;|\))/
    );

    if (androidModel?.[1]) {
      return androidModel[1].trim();
    }

    if (/iphone/i.test(userAgent)) {
      return "iPhone";
    }

    if (/ipad/i.test(userAgent)) {
      return "iPad";
    }

    return "Not Available";
  };

  // --------------------------------------------------
  // Detect Browser
  // --------------------------------------------------

  const getBrowser = () => {
    const userAgent = navigator.userAgent;

    if (/edg/i.test(userAgent)) {
      return "Microsoft Edge";
    }

    if (/chrome|crios/i.test(userAgent)) {
      return "Google Chrome";
    }

    if (/firefox|fxios/i.test(userAgent)) {
      return "Mozilla Firefox";
    }

    if (/safari/i.test(userAgent)) {
      return "Safari";
    }

    return "Unknown";
  };

  // --------------------------------------------------
  // Detect Channel
  // --------------------------------------------------

  const getChannel = () => {
    /*
      If the same React code is used inside Capacitor/WebView
      and normal browser, you can improve this detection
      according to your application architecture.

      For this package-free POC:
      Mobile browser / WebView -> MB
      Desktop browser         -> IB
    */

    const userAgent = navigator.userAgent;

    const isMobile =
      /android|iphone|ipad|ipod|mobile/i.test(userAgent);

    return isMobile ? "MB" : "IB";
  };

  // --------------------------------------------------
  // Capture Device Details
  // --------------------------------------------------

  const captureDeviceDetails = async () => {
    try {
      setLoading(true);

      const devicePayload = {
        channel: getChannel(),

        deviceId: getDeviceId(),

        deviceName: getDeviceName(),

        model: getModel(),

        manufacturer: getManufacturer(),

        platform:
          navigator.userAgentData?.platform ||
          navigator.platform ||
          "Not Available",

        operatingSystem: getOperatingSystem(),

        browser: getBrowser(),

        language:
          navigator.language || "Not Available",

        screenResolution: `${window.screen.width} x ${window.screen.height}`,

        timezone:
          Intl.DateTimeFormat().resolvedOptions().timeZone ||
          "Not Available",

        online: navigator.onLine,

        userAgent:
          navigator.userAgent || "Not Available",

        capturedAt: new Date().toISOString(),
      };

      setDevice(devicePayload);

      console.log(
        "Device Details:",
        devicePayload
      );
    } catch (error) {
      console.error(
        "Device capture failed:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // Capture on Page Load
  // --------------------------------------------------

  useEffect(() => {
    captureDeviceDetails();
  }, []);

  // --------------------------------------------------
  // Mock Backend Call
  // --------------------------------------------------

  const sendToBackend = async () => {
    if (!device) return;

    setStatus("Sending...");

    try {
      /*
        REAL API EXAMPLE:

        const response = await fetch(
          "/api/device/register",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(device),
          }
        );

        if (!response.ok) {
          throw new Error(
            "Device registration failed"
          );
        }
      */

      console.log(
        "Payload sent to backend:",
        device
      );

      await new Promise((resolve) =>
        setTimeout(resolve, 500)
      );

      setStatus(
        "Device information sent successfully (POC)"
      );
    } catch (error) {
      console.error(error);

      setStatus(
        "Unable to send device information"
      );
    }
  };

  // --------------------------------------------------
  // Loading
  // --------------------------------------------------

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">
          Capturing device information...
        </p>
      </div>
    );
  }

  // --------------------------------------------------
  // Unable to Capture
  // --------------------------------------------------

  if (!device) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-600">
          Unable to capture device information.
        </p>
      </div>
    );
  }

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6">

        <h1 className="text-2xl font-semibold text-gray-800">
          Bank One - Device Details POC
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          Available device information captured by the
          frontend without using a device package.
        </p>

        {/* Channel */}

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <p className="text-xs text-gray-500">
            Channel
          </p>

          <p className="text-xl font-semibold text-blue-700">
            {device.channel}
          </p>

          <p className="text-xs text-gray-500 mt-1">
            {device.channel === "IB"
              ? "Internet Banking"
              : "Mobile Banking"}
          </p>
        </div>

        {/* Information */}

        <div className="mt-6 space-y-3">

          <Detail
            label="Device ID"
            value={device.deviceId}
          />

          <Detail
            label="Device Name"
            value={device.deviceName}
          />

          <Detail
            label="Model"
            value={device.model}
          />

          <Detail
            label="Manufacturer"
            value={device.manufacturer}
          />

          <Detail
            label="Platform"
            value={device.platform}
          />

          <Detail
            label="Operating System"
            value={device.operatingSystem}
          />

          <Detail
            label="Browser"
            value={device.browser}
          />

          <Detail
            label="Language"
            value={device.language}
          />

          <Detail
            label="Screen Resolution"
            value={device.screenResolution}
          />

          <Detail
            label="Timezone"
            value={device.timezone}
          />

          <Detail
            label="Online"
            value={device.online ? "Yes" : "No"}
          />

          <Detail
            label="Captured At"
            value={device.capturedAt}
          />

          <Detail
            label="User Agent"
            value={device.userAgent}
          />

        </div>

        {/* Send button */}

        <button
          onClick={sendToBackend}
          className="
            w-full
            mt-6
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-lg
            font-medium
          "
        >
          Send Device Details to Backend
        </button>

        {status && (
          <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm">
            {status}
          </div>
        )}

        {/* Payload */}

        <div className="mt-8 border-t pt-5">

          <h2 className="font-semibold text-gray-700">
            FE → BE Payload
          </h2>

          <pre
            className="
              mt-3
              bg-gray-900
              text-green-400
              p-4
              rounded-lg
              text-xs
              overflow-x-auto
            "
          >
            {JSON.stringify(device, null, 2)}
          </pre>

        </div>

      </div>
    </div>
  );
};

// --------------------------------------------------
// Reusable Details Row
// --------------------------------------------------

const Detail = ({ label, value }) => {
  return (
    <div className="flex justify-between gap-6 border-b pb-2">

      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="text-sm font-medium text-gray-800 text-right break-all">
        {String(value)}
      </span>

    </div>
  );
};
console.log("userAgent:", navigator.userAgent);
console.log("platform:", navigator.platform);
console.log("language:", navigator.language);
console.log("online:", navigator.onLine);
console.log("screen:", window.screen.width, window.screen.height);
console.log(
  "timezone:",
  Intl.DateTimeFormat().resolvedOptions().timeZone
);
console.log(
  "userAgentData:",
  navigator.userAgentData
);
export default DeviceDetailsPOC;