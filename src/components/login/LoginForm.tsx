import Link from "next/link";
import { Button, Form, Input, Label } from "app/components/shared";

export const LoginForm = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Form onSubmit="h" nameForm="Sign In">
        <div className="flex flex-col gap-4">
          <Label htmlFor="">Email*</Label>
          <Input placeholder="Email" type="email" value="" />
          <div className="w-full flex items-center justify-between">
            <Label htmlFor="">Password*</Label>
            <Link href="/forgot-password" className="text-text">
              Forgot Password?
            </Link>
          </div>
          <Input placeholder="Email" type="email" value="" />
        </div>
        <Button variant="white">Sign In</Button>
        <Link href="/signup" className="text-white text-center">
          You do not have an account? Sign up
        </Link>
      </Form>
    </div>
  );
};
