
const courseModules = [
    {
        id: 1,
        title: "৫০+ ডিটেইল লেকচার",
        subtitle: "IELTS Academic ও General Training এর Overview, Format ও প্রয়োজনীয় বিষয়সমূহ সম্পর্কে in-depth আলোচনা",
        icon: '/course-layout/1.png',
    },
    {
        id: 2,
        title: "৩৮টি লেকচার শিট",
        subtitle: "Reading, Writing, Listening ও Speaking এর জন্য প্রয়োজনীয় উচ্চ কোর সম্পন্ন শিট এবং 600+ Vocabulary",
        icon: '/course-layout/2.png',
    },
    {
        id: 3,
        title: "রিডিং এবং লিসেনিং মক টেস্ট",
        subtitle: "পরীক্ষার আগে নিজেকে যাচাই করার জন্য থাকছে রিডিং এবং লিসেনিং এর উপর আলাদা আলাদা মক টেস্ট",
        icon: '/course-layout/3.png',
    },
    {
        id: 4,
        title: "ডাউট সলভিং লাইভ ক্লাস",
        subtitle: "নিয়মিত লাইভ ক্লাসের মাধ্যমে সকল প্রশ্নের উত্তর পাবেন। এছাড়াও রয়েছে ফেসবুক সাপোর্ট গ্রুপ।",
        icon: '/course-layout/4.png',
    }
];

function CourseLayout() {
  return (
      <div className="bg-background py-12 max-w-[calc(100%_-_448px)]">
          <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">How the course is laid out</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 bg-[#111827] border rounded-md">
                  {courseModules.map((module) => {
                      return (
                          <div key={module.id} className="rounded-lg p-6 transition-shadow">
                              <div className="flex items-start gap-4">
                                  <div>
                                      <img src={module.icon} className=" text-white" />
                                  </div>
                                  <div className="flex-1">
                                      <h3 className="font-semibold text-white text-lg mb-2">{module.title}</h3>
                                      <p className="text-[#9CA3AF] text-sm leading-relaxed">
                                          {module.subtitle}
                                      </p>
                                  </div>
                              </div>
                          </div>
                      );
                  })}
              </div>
          </div>
      </div>
  )
}

export default CourseLayout