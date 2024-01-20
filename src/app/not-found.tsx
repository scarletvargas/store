import { Button } from "app/components/shared/Button";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center gap-4 flex-col h-full">
      <h2 className="text-border text-6xl font-semibold">404</h2>
      <p className="text-text">This page doesn&apos;t exist.</p>
      <Button variant="white" type="link" href="/">
        Return Home
      </Button>
    </div>
  );
}
