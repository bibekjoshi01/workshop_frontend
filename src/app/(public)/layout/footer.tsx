export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex items-center">
              <div className="mr-4">
                <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 16V12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 8H12.01"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-lg font-semibold">Event Planner</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div>
                <h4 className="text-gray-300 font-semibold mb-2">Quick Links</h4>
                <ul className="space-y-1">
                  <li>
                    <a className="hover:text-gray-300 transition-colors" href="#">
                      Event Calendar
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-300 transition-colors" href="#">
                      Create Event
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-300 transition-colors" href="#">
                      Community Forum
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-300 font-semibold mb-2">Resources</h4>
                <ul className="space-y-1">
                  <li>
                    <a className="hover:text-gray-300 transition-colors" href="#">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-300 transition-colors" href="#">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-300 transition-colors" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-300 font-semibold mb-2">Support</h4>
                <ul className="space-y-1">
                  <li>
                    <a className="hover:text-gray-300 transition-colors" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-300 transition-colors" href="#">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray-300 transition-colors" href="#">
                      Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-sm text-gray-500">© 2024 Event Planner. All rights reserved.</div>
          </div>
        </div>
      </footer>
    )
  }
