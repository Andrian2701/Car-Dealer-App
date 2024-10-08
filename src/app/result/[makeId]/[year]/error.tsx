"use client";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <main className="error-page">
      <h1>Error</h1>
      <Link href="/">Get back</Link>
    </main>
  );
};

export default ErrorPage;
