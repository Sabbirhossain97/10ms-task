import {  Users, Clock, Video, FileText, BookOpen, Gift, Facebook, PhoneCall } from "lucide-react";

function ProductTrailer() {


  return (
      <div className="bg-white border absolute lg:max-w-[400px] right-0 border-gray-300 text-foreground rounded-lg self-start">
          <iframe className="p-1 h-[220px] w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
          <div className="flex gap-2 overflow-x-auto">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="flex-shrink-0 w-24 h-16 bg-gray-200 rounded overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                      <img
                          src="/lovable-uploads/64dc49c6-d73b-4886-9939-7f914dfec651.png"
                          alt={`Video thumbnail ${index}`}
                          className="w-full h-full object-cover"
                      />
                  </div>
              ))}
          </div>
          <div className="p-4 ">
              <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold">৳3850</span>
                      <span className="text-xl text-muted-foreground line-through">৳5000</span>
                      <span className="bg-price text-white px-2 py-1 rounded text-sm font-medium">
                          ১১৫০ ৳ ছাড়
                      </span>
                  </div>
              </div>

              <button className="w-full text-white mb-6 bg-green-600 hover:bg-green-700 py-2 px-8 rounded-[6px]">
                  Enroll
              </button>

              <div className="space-y-4">
                  <h3 className="font-semibold text-lg">এই কোর্স যা থাকছে</h3>

                  <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span>Total Enrolled 32992</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>Time Required 50 hours</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <Video className="w-4 h-4 text-muted-foreground" />
                          <span>54 Videos</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-muted-foreground" />
                          <span>10 Reading & 10 Listening Mocktests</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-muted-foreground" />
                          <span>38 Lecture Sheets</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <Video className="w-4 h-4 text-muted-foreground" />
                          <span>25 Video Lectures</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <Gift className="w-4 h-4 text-muted-foreground" />
                          <span>1 Free Hardcopy Book Delivered</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <Facebook className="w-4 h-4 text-muted-foreground" />
                          <span>Facebook Support Group</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>Course Validity Lifetime</span>
                      </div>
                  </div>

                  <div className="pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <PhoneCall className="w-4 h-4" />
                          <span>কোনো সমস্যা হলে কল করুন:</span>
                          <span className="text-accent font-medium">16910</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ProductTrailer