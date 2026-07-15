import { SubmitButton } from "@/components/common/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const SignUp = () => {
  return (
    <Card className="[--card-spacing:--spacing(6)]">
      <CardHeader>
        <CardTitle className="text-xl">Create your account</CardTitle>
        <CardDescription>
          Start comparing and discover the better choice.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Type your name" name="name" />
            <span className="text-sm text-destructive empty:hidden">{}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Type your email" name="email" />
            <span className="text-sm text-destructive empty:hidden">{}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Type your password"
              name="password"
            />
            <span className="text-sm text-destructive empty:hidden">{}</span>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="cpassword">Confirm Password</Label>
            <Input
              id="cpassword"
              type="password"
              placeholder="Type your password"
              name="confirm_password"
            />
            <span className="text-sm text-destructive empty:hidden">{}</span>
          </div>
          <SubmitButton />
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-foreground hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUp;
