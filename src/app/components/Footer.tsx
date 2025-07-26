const footerSections = {
    company: [
        "Career / Recruitment",
        "Join as a Teacher",
        "Join as an Affiliate",
        "Privacy policy",
        "Refund policy",
        "Terms & Conditions"
    ],
    others: [
        "Blog",
        "Book Store",
        "Free Notes & Guides",
        "Job Preparation Courses",
        "Verify Certificate",
        "Free Download"
    ]
};


export const Footer = () => {
    return (
        <footer className="bg-white py-12 max-w-[1200px] mx-auto">
            <div className="mx-auto px-4">
                <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-8">

                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <div className="gap-2">
                            <img src='/logo.svg' alt='logo' className="" width='120' height='120' />
                        </div>
                        <div>
                            <h4 className="text-center md:text-start font-medium mb-4">Download Our Mobile App</h4>
                            <div className="flex flex-wrap gap-3">
                                <img
                                    src='/footer/google.jpg'
                                    alt='google'
                                    className="h-10 w-auto"
                                />
                                <img
                                    src='/footer/apple.jpg'
                                    alt='google'
                                    className="h-10 w-auto"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-16">
                        <div>
                            <h4 className="font-semibold mb-4 text-xl">Company</h4>
                            <ul className="space-y-3 text-base text-gray-600">
                                {footerSections.company.map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-xl">Others</h4>
                            <ul className="space-y-3 text-base text-gray-600">
                                {footerSections.others.map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4 className="hidden md:block font-semibold mb-4 text-xl">Keep up with us at</h4>
                        <div className="hidden md:block space-y-3 text-base text-gray-600">
                            <p>Call Us: <span className="text-green-600">16910</span> (24×7)</p>
                            <p>whatsapp: <span className="text-green-600">+8801896016252</span>(24×7)</p>
                            <p>Outside Bangladesh: <span className="text-green-600">+880 96109169910</span></p>
                            <p>Email Us: <a href="mailto:support@10minuteschool.com" className="text-green-600">support@10minuteschool.com</a></p>
                        </div>

                        <div className="flex gap-5 mt-6">
                            <img src='/footer/facebook.jpg' />
                            <img src='/footer/instagram.jpg' />
                            <img src='/footer/linkedin.jpg' />
                            <img src='/footer/youtube.jpg' />
                            <img src='/footer/tiktok.jpg' />
                        </div>
                    </div>
                </div>

                <div className=" mt-12 pt-6">
                    <p className="text-center text-sm text-muted-foreground">
                        2015 - 2025 Copyright © 10 Minute School. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
