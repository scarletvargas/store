import { Button, Form, Label, Input } from "app/components/shared";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="flex items-center justify-center w-full h-full py-6 sm:py-12 px-6 sm:px-12 xl:max-w-screen-xl">
      <Form nameForm="Sign In">
        <div className="flex flex-col gap-4">
          <Label htmlFor="">Email*</Label>
          <Input placeholder="Email" type="email" value="" />
        </div>
        <Button variant="white">Recover password</Button>
        <Link href="/login" className="text-white text-center">
          Return to the login page.
        </Link>
      </Form>
    </div>
  );
}
