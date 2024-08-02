"use client";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

const LoggedIn = ({ session }: any) => {
  console.log(session);
  // if no session, display loading
  if (!session)
    return (
      <>
        <div>Not logged in</div>
        <Link href="/login">
          <div className="text-blue-500">Log in</div>
        </Link>
      </>
    );
  return (
    <div>
      <h1>Welcome, {session.user.email}</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default LoggedIn;
