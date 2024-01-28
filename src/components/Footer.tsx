export function Footer() {
  return (
    <footer className="p-4 bg-slate-800/40 border-t border-slate-700 md:p-6 !py-10">
      <div className="max-w-screen-xl mx-auto justify-center flex flex-col md:flex-row items-center md:justify-between">
        <span className="text-sm text-gray-200 sm:text-center">
          © 2023{" "}
          <a
            href="https://polinema-innovation-tribe.vercel.app"
            className="hover:underline"
          >
            Politribe™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-200 sm:mt-0 justify-center">
          <li>
            <a
              href="/about"
              className="mr-4 hover:underline md:mr-6 "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className="mr-4 hover:underline md:mr-6"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/contributing"
              className="mr-4 hover:underline md:mr-6"
            >
              Contributing
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
