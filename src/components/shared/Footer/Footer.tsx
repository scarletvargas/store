import { LogoIcon } from "app/icons";
import Link from "next/link";
import { Button, Input } from "..";

export const Footer = () => {
  return (
    <footer className="text-white py-6 sm:py-12 flex flex-col gap-6 min-w-[320px] 2xl:max-w-screen-2xl px-6 sm:px-12 mx-auto">
      <div className="flex flex-col w-full md:flex-row gap-8">
        <div className="w-1/2">
          <div>
            <Link
              href="/"
              className="font-bold text-xl text-white flex flex-row items-center gap-2"
            >
              <LogoIcon className="stroke-primary" />
              Tech Space
            </Link>
            <p className="text-text">Discover innovation in every detail.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <p className="text-text font-medium">Tech Space</p>
              <p className="text-white font-medium">FAQs</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-text font-medium">Account</p>
              <Link className="text-white font-medium" href="/my-account">
                My Account
              </Link>
              <Link className="text-white font-medium" href="/login">
                Sign In
              </Link>
              <Link className="text-white font-medium" href="/forgot-password">
                Reset Password
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-contrast-dark flex flex-col justify-between min-w-[300px] sm:w-[500px] h-fit gap-3 md:max-w-[500px] p-3 rounded-xl border border-border">
          <h2 className="text-whitw text-lg font-semibold">
            Join our mailing list
          </h2>
          <p className="text-text">
            Get notified about new products as soon as they drop.
          </p>
          <div className="flex flex-row gap-4">
            <Input
              className="w-full"
              placeholder="Email"
              type="email"
              value=""
            />
            <Button variant="white">Sign In</Button>
          </div>
        </div>
      </div>
      <p className="font-medium text-text pt-6 w-full">
        Created by{" "}
        <Link
          className="text-white"
          href="https://www.linkedin.com/in/scarletvargas-systems-engineer/"
        >
          Dev Scarlet
        </Link>{" "}
        © Copyright {new Date().getFullYear()} Tech Space.
      </p>
    </footer>
  );
};
