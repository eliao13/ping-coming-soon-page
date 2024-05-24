export default function Header() {
  return (
    <header className="flex flex-col justify-center align-middle text-center gap-4 py-12">
      <div className="logo flex justify-center mb-8">
        <img src="src/assets/logo.svg" alt="logo" />
      </div>
      <h1 className="font-light text-[#969696]">
        We are launching <span className="font-bold text-black">soon!</span>
      </h1>
      <p>Subscribe and get notified</p>
    </header>
  );
}
