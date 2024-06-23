import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export default function AppContent() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardFooter className="space-x-4">
          <Button>View project</Button>
          <Button variant="secondary">Github</Button>
        </CardFooter>
      </Card>
    </>
  );
}
