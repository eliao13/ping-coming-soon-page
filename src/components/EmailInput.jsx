import { useState } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleEmailSubmit() {
    setSuccess(false);

    if (!checkValidEmail(email)) {
      setError(true);
      return;
    }

    if (checkValidEmail(email)) {
      setError(false);
      setSuccess(true);
    }
  }

  function checkValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleEnterKey(e) {
    if (e.key === "Enter") {
      handleEmailSubmit();
    }
  }

  return (
    <div className="input-container flex flex-col gap-4 text-center">
      <div className="flex flex-col gap-2">
        <input
          className={
            `border-2 rounded-3xl px-4 py-2` +
            (error ? " border-[#ff5263]" : "")
          }
          type="text"
          placeholder="Your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleEnterKey}
        />

        {error && (
          <p className="text-[#ff5263] text-xs italic">
            Please provide a valid email address
          </p>
        )}

        {success && (
          <p className="text-[#4f7df3] text-xs italic">
            Thank you for subscribing!
          </p>
        )}
      </div>

      <button className="text-white rounded-3xl" onClick={handleEmailSubmit}>
        Notify Me
      </button>
    </div>
  );
}
