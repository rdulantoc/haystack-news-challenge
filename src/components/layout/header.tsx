const Header = () => {
  return (
    <header className="flex items-center justify-center bg-neutral-800 text-white">
      <div className="flex w-full max-w-screen-lg items-center justify-start gap-3 px-4 md:px-6 xl:px-0">
        <h1 className="text-3xl font-thin">
          PHOTO<span className="font-semibold">SEARCH</span>
        </h1>
        <span className="pt-1 text-sm font-thin">powered by Flickz</span>
      </div>
    </header>
  );
};

export default Header;
