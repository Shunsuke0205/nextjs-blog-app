import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">
          <Link href="/">Next.js Blog App</Link>
        </h1>
      </div>
      <div>
        <nav className="text-sm font-medium">
          <Link href="/articles/new" className="bg-orange-300 py-3 px-3 rounded-md">Post an article</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
