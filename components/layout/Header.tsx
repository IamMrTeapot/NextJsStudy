import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

function Header() {
  return (
    <div className="layout-header">
      <h1>Header</h1>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/blog">Blog</Link>
      <Link
        href="/api/auth/signin"
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        Sign In
      </Link>
      <Link
        href="/api/auth/signout"
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        Sign Out
      </Link>
    </div>
  );
}

export default Header;
