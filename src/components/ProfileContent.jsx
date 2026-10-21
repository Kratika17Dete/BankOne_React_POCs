export default function ProfileContent() {
  const personalDetails = [
    {
      title: "KYC",
      subtitle: "Review your identity documents",
    },
    {
      title: "Customer ID",
      subtitle: "View your customer identification",
    },
    {
      title: "Details",
      subtitle: "Manage your personal information",
    },
  ];

  const supportSecurity = [
    {
      title: "Raise dispute",
      subtitle: "Get help with a transaction",
    },
    {
      title: "Reset MPIN",
      subtitle: "Change your mobile banking PIN",
    },
    {
      title: "Biometrics",
      subtitle: "Manage fingerprint and face recognition",
    },
    {
      title: "Trusted devices",
      subtitle: "Manage devices used to access your profile",
    },
    {
      title: "Login authorisation",
      subtitle: "Manage how you authorise sign-ins",
    },
    {
      title: "Permissions",
      subtitle: "Review access and permissions",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-8 pb-10">

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-4xl font-semibold text-[#1F2937]">
          My profile
        </h1>

        <p className="text-sm text-[#98A2B3] mt-1">
          Your personal details, security and preferences.
        </p>
      </div>

      {/* Top Info Card */}
      <div className="bg-white rounded-[24px] p-6 shadow-sm mb-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F2F4F7] flex items-center justify-center">
              👤
            </div>

            <div>
              <p className="text-xs text-[#98A2B3]">
                Customer ID
              </p>

              <p className="font-medium text-[#101828]">
                8829-1042-001
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs text-[#98A2B3]">
              Email
            </p>

            <p className="font-medium text-[#101828]">
              sivarathna@example.com
            </p>
          </div>

        </div>
      </div>

      {/* Desktop Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT COLUMN */}
        <div className="space-y-6">

          {/* Personal Details */}
          <div>
            <h3 className="text-sm font-semibold mb-3">
              Personal details
            </h3>

            <div className="bg-white rounded-[24px] p-4 shadow-sm">

              {personalDetails.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    flex
                    items-center
                    justify-between
                    py-4
                    ${
                      index !==
                      personalDetails.length - 1
                        ? "border-b border-[#E7ECEF]"
                        : ""
                    }
                  `}
                >
                  <div>
                    <p className="font-medium text-sm">
                      {item.title}
                    </p>

                    <p className="text-xs text-[#98A2B3]">
                      {item.subtitle}
                    </p>
                  </div>

                  <span className="text-gray-400">
                    ›
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* Preferences */}
          <div>
            <h3 className="text-sm font-semibold mb-3">
              Preferences
            </h3>

            <div className="bg-white rounded-[24px] p-4 shadow-sm">

              <div className="flex justify-between py-4 border-b border-[#E7ECEF]">
                <span>Language</span>
                <span className="text-[#98A2B3]">
                  English
                </span>
              </div>

              <div className="flex justify-between py-4">
                <span>Appearance</span>
                <span className="text-[#98A2B3]">
                  Light
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div>

          <h3 className="text-sm font-semibold mb-3">
            Support / Security
          </h3>

          <div className="bg-white rounded-[24px] p-4 shadow-sm">

            {supportSecurity.map((item, index) => (
              <div
                key={item.title}
                className={`
                  flex
                  items-center
                  justify-between
                  py-4
                  ${
                    index !==
                    supportSecurity.length - 1
                      ? "border-b border-[#E7ECEF]"
                      : ""
                  }
                `}
              >
                <div>
                  <p className="font-medium text-sm">
                    {item.title}
                  </p>

                  <p className="text-xs text-[#98A2B3]">
                    {item.subtitle}
                  </p>
                </div>

                <span className="text-gray-400">
                  ›
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-end mt-8">
        <button
          className="
            border
            border-[#E7ECEF]
            rounded-full
            px-6
            py-2
            text-[#D92D20]
            text-sm
            bg-white
          "
        >
          Sign out
        </button>
      </div>

    </div>
  );
}