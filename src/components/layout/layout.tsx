import React from 'react';
import Header from './header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-auto grid min-h-screen grid-rows-[60px,1fr]">
      <Header />
      <main className="w-full max-w-screen-lg justify-self-center py-6">{children}</main>
    </div>
  );
};
export default Layout;
