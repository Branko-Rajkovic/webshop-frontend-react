import { useState } from "react";
import InputField from "./InputField";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        type="email"
        name="email"
        field={email}
        setField={setEmail}
        required={true}
      />

      <InputField
        type="password"
        name="password"
        field={password}
        setField={setPassword}
        required={true}
      />

      <button
        type="submit"
        className="w-full py-2 italic font-semibold text-white transition rounded-md bg-sky-400 hover:bg-sky-600"
      >
        Login
      </button>
    </form>
  );
}
