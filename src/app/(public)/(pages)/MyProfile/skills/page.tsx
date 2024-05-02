import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

export default function Skills() {
  return (
    <div className="pt-0 my-4 bg-white " >
      <div className="flex justify-between items-center mb-4">
      <h1 className="text-start text-lg p-4 font-semibold">Skills</h1>

        <Button size="sm" variant="outline">
          <FileEditIcon className="w-4 h-4" />
          Edit All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="bg-white shadow-sm">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">
              <ChromeIcon className="w-6 h-6 mr-2 inline-block" />
              JavaScript
            </h4>
            <Button size="sm" variant="outline">
              <FileEditIcon className="w-4 h-4" />
            </Button>
          </div>
          <CardContent>
            <p>Proficient in modern JavaScript, including ES6+ features.</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">
              <ComponentIcon className="w-6 h-6 mr-2 inline-block" />
              React
            </h4>
            <Button size="sm" variant="outline">
              <FileEditIcon className="w-4 h-4" />
            </Button>
          </div>
          <CardContent>
            <p>Experienced in building complex web applications with React.</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">
              <CodepenIcon className="w-6 h-6 mr-2 inline-block" />
              Node.js
            </h4>
            <Button size="sm" variant="outline">
              <FileEditIcon className="w-4 h-4" />
            </Button>
          </div>
          <CardContent>
            <p>Proficient in building server-side applications with Node.js.</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">
              <ChromeIcon className="w-6 h-6 mr-2 inline-block" />
              CSS
            </h4>
            <Button size="sm" variant="outline">
              <FileEditIcon className="w-4 h-4" />
            </Button>
          </div>
          <CardContent>
            <p>
              Experienced in writing clean, maintainable, and responsive CSS.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">
              <TypeIcon className="w-6 h-6 mr-2 inline-block" />
              TypeScript
            </h4>
            <Button size="sm" variant="outline">
              <FileEditIcon className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
function CodepenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function FileEditIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function ComponentIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function TypeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}
