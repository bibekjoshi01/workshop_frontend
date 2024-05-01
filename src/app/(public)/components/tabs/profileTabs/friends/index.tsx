import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TabsContent } from  "@/components/ui/tabs";

export default function Friends() {
  return (
    <TabsContent className="pt-8" value="friends">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
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
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
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
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
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
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
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
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
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
                <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
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
    </TabsContent>
  );
}
