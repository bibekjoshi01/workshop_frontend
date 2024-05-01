import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function RegisterInEvent() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register for {"Telamon's"} Event</h1>
        <p className="text-gray-500 dark:text-gray-400">Product Management and Generative AI</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input id="linkedin" placeholder="Enter your LinkedIn profile URL" required type="url" />
        </div>
        <Button className="w-full" type="submit">
          Register
        </Button>
      </div>
    </div>
  )
}