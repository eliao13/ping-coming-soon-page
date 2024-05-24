import IconContainer from "./IconContainer";

export default function Footer() {
  return (
    <footer className="flex flex-col text-center gap-4 text-[#969696] text-xs">
      <IconContainer />
      &copy; Copyright Ping. All rights reserved.
      <p class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Evan Liao</a>.
      </p>
    </footer>
  );
}
