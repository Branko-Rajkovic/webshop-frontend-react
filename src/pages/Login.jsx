import React, { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 border shadow-lg rounded-2xl w-80">
        <h2 className="mb-4 text-xl font-bold">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password{" "}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src="/password_eye.png" alt="password-eye" />
              </button>
            </label>

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-2 border rounded"
              autoComplete="on"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white transition bg-blue-500 rounded-2xl hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
