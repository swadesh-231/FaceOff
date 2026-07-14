import { SubmitButton } from "@/components/common/SubmitButton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const SignUp = () => {
  return (
   <form >
      <div className="mt-4">
        <Label htmlFor="name">Name</Label>
        <Input placeholder="Type your name" name="name" />
        <span className="text-red-400">{}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="email">Email</Label>
        <Input placeholder="Type your email" name="email" />
        <span className="text-red-400">{}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="Type your password"
          name="password"
        />
        <span className="text-red-400">{}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="cpassword">Confirm Password</Label>
        <Input
          type="password"
          placeholder="Type your password"
          name="confirm_password"
        />
        <span className="text-red-400">{}</span>
      </div>
      <div className="mt-4">
        <SubmitButton />
      </div>
    </form>
  )
}

export default SignUp