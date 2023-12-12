"use client";

import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/booking-history");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="mt-24">
        <h1 className="mb-3 text-4xl font-bold">Sign In</h1>
        <hr />

        <h2 className="mt-7 text-xl">Sign In to your account</h2>
        <form className="mt-10 w-96" onSubmit={handleSignIn}>
          <div className="mb-3">
            <label className="block mb-1 text-gray-700" htmlFor="email">
              Email
            </label>
            <TextInput
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color={error ? "failure" : "gray"}
              required
            />
          </div>

          <div className="mb-3">
            <label className="block mb-1 text-gray-700" htmlFor="password">
              Password
            </label>
            <TextInput
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color={error ? "failure" : "gray"}
              required
            />
          </div>

          {error && (
            <p className="text-red-500">
              Invalid credentials. Please try again.
            </p>
          )}

          <Button
            className="px-5 mt-5"
            type="submit"
            isProcessing={loading}
            disabled={loading}
          >
            <span className="mr-2">
              {loading ? "Signing you in..." : "Sign In"}
            </span>
            {loading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <></>
            )}
          </Button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
