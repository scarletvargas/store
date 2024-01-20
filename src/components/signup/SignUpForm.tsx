import Link from "next/link";
import { Button, Form, Input, Label } from "app/components/shared";

export const SignUpForm = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Form nameForm="Sign Up">
        <div className="flex flex-col gap-4">
          <Label htmlFor="">Email*</Label>
          <Input placeholder="Email" type="email" value="" />
          <Label htmlFor="">Password*</Label>
          <Input placeholder="Password" type="email" value="" />
          <Label htmlFor="">Repeat Password*</Label>
          <Input placeholder="Repeat password" type="email" value="" />
        </div>
        <Button variant="white">Create new account</Button>
        <Link href="/login" className="text-white text-center">
        Do you already have an account? Log in!
        </Link>
      </Form>
    </div>
  );
};
