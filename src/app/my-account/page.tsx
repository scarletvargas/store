import { Button, Form } from "app/components/shared";
import { UserIcon } from "app/icons/UserIcon";

export default function MyAccountPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 w-full h-full py-6 sm:py-12 px-6 sm:px-12 xl:max-w-screen-xl">
      <Form nameForm="My Account">
        <div className="flex flex-row gap-4 items-center pl-3">
          <UserIcon
            className="fill-background p-2 bg-text rounded-md"
            width={60}
            height={60}
            strokeWidth={0}
          />
          <div>
            <p className="text-white text-lg font-semibold">Name</p>
            <p className="text-primary">Email Address</p>
          </div>
        </div>
        <Button type="link" href="/forgot-password" variant="white">Change password</Button>
        <Button variant="black">Delete account</Button>
      </Form>
      <Button className="w-full max-w-[500px]" variant="transparent">
        Sign Out
      </Button>
    </div>
  );
}
