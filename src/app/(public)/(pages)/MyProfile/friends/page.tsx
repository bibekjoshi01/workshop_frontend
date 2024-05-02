import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Friends() {
  return (
    <div className="rounded-xl my-2 bg-white dark:bg-gray-800">
      <h1 className="text-start text-lg p-4 font-semibold">Friends</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2">
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage alt="Avatar" src="/userImage.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">John Doe</h4>
                <p className="text-sm text-gray-500">Mutual Friend</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button size="sm" variant="outline">
              Add Friend
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage alt="Avatar" src="/userImage.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">Jane Doe</h4>
                <p className="text-sm text-gray-500">Mutual Friend</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button size="sm" variant="outline">
              Add Friend
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage alt="Avatar" src="/userImage.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">John Smith</h4>
                <p className="text-sm text-gray-500">Mutual Friend</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button size="sm" variant="outline">
              Add Friend
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage alt="Avatar" src="/userImage.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">Jane Smith</h4>
                <p className="text-sm text-gray-500">Mutual Friend</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button size="sm" variant="outline">
              Add Friend
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage alt="Avatar" src="/userImage.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">Bob Johnson</h4>
                <p className="text-sm text-gray-500">Mutual Friend</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button size="sm" variant="outline">
              Add Friend
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage alt="Avatar" src="/userImage.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">Sarah Lee</h4>
                <p className="text-sm text-gray-500">Mutual Friend</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button size="sm" variant="outline">
              Add Friend
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
