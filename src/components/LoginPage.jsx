import React from "react";

function LoginPage() {

const loginWithBiometric = async () => {
  try {

    const challenge = new Uint8Array(32);
    crypto.getRandomValues(challenge);

    const credential = await navigator.credentials.get({
      publicKey: {
        challenge,
        userVerification: "required"
      }
    });

    console.log("LOGIN SUCCESS");
    console.log(credential);

  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="min-h-screen flex">
      {/* Left */}
      <div className="w-1/2 hidden lg:block">
        <img
         src="/assets/bank-login.jpg"

alt="Bank Login"></img>
      </div>

      {/* Right */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h1 className="text-4xl font-bold mb-8">
            Welcome back!
          </h1>

          <input
            type="text"
            placeholder="Enter username"
            className="w-full p-4 border rounded mb-4"
          />

          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-4 border rounded mb-4"
          />

          <button className="w-full bg-red-600 text-white p-4 rounded">
            Login
          </button>
          <button
  className="w-full bg-blue-600 text-white py-3 rounded-lg"  onClick={loginWithBiometric}
>
  Login with Biometrics
</button>



        </div>
      </div>
    </div>
  );
}

export default LoginPage;