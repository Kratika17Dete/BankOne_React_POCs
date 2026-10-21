import React, { useEffect, useState } from "react";

const UIConfigPOC = () => {
  const [config, setConfig] = useState(null);
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // ---------------------------------------------------------
  // POC ONLY:
  // Simulates response from GET /ui-config
  //
  // Later replace this with:
  // const response = await fetch("/ui-config");
  // const data = await response.json();
  // ---------------------------------------------------------
  const getUIConfig = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          currencyConvention: {
            currencyCode: "USD",
            locale: "en-US",
            decimalPlaces: 2,
            symbolPosition: "before",
          },

          transfer: {
            minAmount: 100,
            maxAmount: 500000,
          },

          fx: {
            preferentialFxCode: "PREF",
            enabled: true,
          },

          validation: {
            remarksRequired: true,
            remarksMinLength: 3,
            remarksMaxLength: 100,
          },
        });
      }, 500);
    });
  };

  // ---------------------------------------------------------
  // Load configuration
  // ---------------------------------------------------------
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const data = await getUIConfig();

        setConfig(data);
      } catch (err) {
        console.error("Unable to load UI configuration", err);
        setError("Unable to load application configuration.");
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  // ---------------------------------------------------------
  // Currency formatter
  // ---------------------------------------------------------
  const formatCurrency = (value) => {
    if (!config || !value) return "";

    const {
      locale,
      currencyCode,
      decimalPlaces,
    } = config.currencyConvention;

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(Number(value));
  };

  // ---------------------------------------------------------
  // Dynamic validation based on BE config
  // ---------------------------------------------------------
  const validateForm = () => {
    setError("");

    const numericAmount = Number(amount);

    if (!amount) {
      setError("Amount is required.");
      return false;
    }

    if (Number.isNaN(numericAmount)) {
      setError("Please enter a valid amount.");
      return false;
    }

    if (numericAmount < config.transfer.minAmount) {
      setError(
        `Minimum allowed amount is ${formatCurrency(
          config.transfer.minAmount
        )}`
      );

      return false;
    }

    if (numericAmount > config.transfer.maxAmount) {
      setError(
        `Maximum allowed amount is ${formatCurrency(
          config.transfer.maxAmount
        )}`
      );

      return false;
    }

    if (
      config.validation.remarksRequired &&
      !remarks.trim()
    ) {
      setError("Remarks are required.");
      return false;
    }

    if (
      remarks.trim().length <
      config.validation.remarksMinLength
    ) {
      setError(
        `Remarks must contain at least ${config.validation.remarksMinLength} characters.`
      );

      return false;
    }

    if (
      remarks.length >
      config.validation.remarksMaxLength
    ) {
      setError(
        `Remarks cannot exceed ${config.validation.remarksMaxLength} characters.`
      );

      return false;
    }

    return true;
  };

  // ---------------------------------------------------------
  // Submit
  // ---------------------------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    alert(
      `POC validation successful

Amount: ${formatCurrency(amount)}
FX Code: ${config.fx.preferentialFxCode}
Remarks: ${remarks}`
    );
  };

  // ---------------------------------------------------------
  // Loading
  // ---------------------------------------------------------
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">
          Loading UI configuration...
        </p>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="p-6 text-red-600">
        Unable to load configuration.
      </div>
    );
  }

  // ---------------------------------------------------------
  // UI
  // ---------------------------------------------------------
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">

        <h1 className="text-2xl font-semibold text-gray-800">
          Bank One - UI Configuration POC
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          UI behavior below is controlled using
          backend-provided configuration.
        </p>

        {/* ------------------------------------------------ */}
        {/* Configuration received from BE */}
        {/* ------------------------------------------------ */}

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">

          <h2 className="font-semibold text-blue-800">
            Configuration received from Backend
          </h2>

          <div className="mt-3 space-y-2 text-sm">

            <p>
              Currency:
              <strong className="ml-2">
                {config.currencyConvention.currencyCode}
              </strong>
            </p>

            <p>
              Minimum Amount:
              <strong className="ml-2">
                {formatCurrency(
                  config.transfer.minAmount
                )}
              </strong>
            </p>

            <p>
              Maximum Amount:
              <strong className="ml-2">
                {formatCurrency(
                  config.transfer.maxAmount
                )}
              </strong>
            </p>

            <p>
              Preferential FX Code:
              <strong className="ml-2">
                {config.fx.preferentialFxCode}
              </strong>
            </p>

            <p>
              Remarks Maximum Length:
              <strong className="ml-2">
                {
                  config.validation
                    .remarksMaxLength
                }
              </strong>
            </p>

          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* Transfer Form */}
        {/* ------------------------------------------------ */}

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-5"
        >

          {/* Amount */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transfer Amount
            </label>

            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
              min={config.transfer.minAmount}
              max={config.transfer.maxAmount}
              className="
                w-full
                border
                border-gray-300
                rounded-lg
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              placeholder="Enter amount"
            />

            <p className="text-xs text-gray-500 mt-2">
              Allowed:
              {" "}
              {formatCurrency(
                config.transfer.minAmount
              )}
              {" - "}
              {formatCurrency(
                config.transfer.maxAmount
              )}
            </p>

          </div>

          {/* Currency preview */}

          {amount && (
            <div className="bg-gray-50 p-3 rounded-lg">

              <p className="text-xs text-gray-500">
                Formatted Amount
              </p>

              <p className="text-lg font-semibold text-gray-800">
                {formatCurrency(amount)}
              </p>

            </div>
          )}

          {/* FX */}

          {config.fx.enabled && (
            <div>

              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferential FX Code
              </label>

              <input
                type="text"
                value={
                  config.fx.preferentialFxCode
                }
                readOnly
                className="
                  w-full
                  bg-gray-100
                  border
                  border-gray-300
                  rounded-lg
                  px-4
                  py-3
                "
              />

              <p className="text-xs text-gray-500 mt-1">
                Value received from UI configuration.
              </p>

            </div>
          )}

          {/* Remarks */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Remarks
            </label>

            <textarea
              value={remarks}
              onChange={(e) =>
                setRemarks(e.target.value)
              }
              maxLength={
                config.validation
                  .remarksMaxLength
              }
              className="
                w-full
                border
                border-gray-300
                rounded-lg
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              placeholder="Enter remarks"
            />

            <div className="flex justify-between text-xs text-gray-500 mt-1">

              <span>
                Min:
                {" "}
                {
                  config.validation
                    .remarksMinLength
                }
                {" characters"}
              </span>

              <span>
                {remarks.length}
                /
                {
                  config.validation
                    .remarksMaxLength
                }
              </span>

            </div>

          </div>

          {/* Error */}

          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Submit */}

          <button
            type="submit"
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-medium
              py-3
              rounded-lg
            "
          >
            Validate Configuration
          </button>

        </form>

        {/* Architecture */}

        <div className="mt-8 border-t pt-5">

          <p className="text-sm font-semibold text-gray-700">
            POC Flow
          </p>

          <div className="mt-3 text-sm text-gray-500 space-y-1">
            <p>1. Load /ui-config</p>
            <p>2. Store configuration in React</p>
            <p>3. Apply currency convention</p>
            <p>4. Apply Min / Max</p>
            <p>5. Apply validation rules</p>
            <p>6. Display FX configuration</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default UIConfigPOC;