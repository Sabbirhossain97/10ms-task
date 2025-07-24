import { Search, Phone, ChevronDown } from "lucide-react";

function Header() {
  return (
    <div>
          <header className="bg-white border-b border-border">
              <div className="container mx-auto px-4">
                  <div className="flex items-center justify-between h-16">
                      {/* Logo */}
                      <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-accent to-green-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">10</span>
                          </div>
                          <span className="font-bold text-xl">MINUTE SCHOOL</span>
                      </div>

                      {/* Search */}
                      <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
                          <div className="relative w-full">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <input
                                  type="text"
                                  placeholder="কোর্স, বই বা ভার্সিটি কার্ড খুঁজুন"
                                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                              />
                          </div>
                      </div>

                      {/* Navigation */}
                      <div className="flex items-center gap-6">
                          <nav className="hidden lg:flex items-center gap-6">
                              <div className="flex items-center gap-1 hover:text-accent cursor-pointer">
                                  <span>Class 6-12</span>
                                  <ChevronDown className="w-4 h-4" />
                              </div>
                              <div className="flex items-center gap-1 hover:text-accent cursor-pointer">
                                  <span>Skills</span>
                                  <ChevronDown className="w-4 h-4" />
                              </div>
                              <span className="hover:text-accent cursor-pointer">Admission</span>
                              <div className="flex items-center gap-1 hover:text-accent cursor-pointer">
                                  <span>Online Batch</span>
                                  <ChevronDown className="w-4 h-4" />
                              </div>
                              <div className="flex items-center gap-1 hover:text-accent cursor-pointer">
                                  <span>More</span>
                                  <ChevronDown className="w-4 h-4" />
                              </div>
                          </nav>

                          <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2 text-sm">
                                  <Phone className="w-4 h-4" />
                                  <span className="font-medium">16910</span>
                              </div>
                              <button >
                                  লগ-ইন
                              </button>
                              <button>
                                  সাইন-আপ
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
    </div>
  )
}

export default Header