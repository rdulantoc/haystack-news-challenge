import React from 'react';
import Header from './header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-auto grid min-h-screen grid-rows-[60px,1fr]">
      <Header />
      <main className="w-full max-w-screen-lg justify-self-center px-4 py-6 md:px-6 xl:px-0">{children}</main>
    </div>
  );
};
export default Layout;
