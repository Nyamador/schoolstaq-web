import Image from 'next/image'


const Features = () => {
    const FeatureIcons = [
        {
            link: "/svg/student_feature.svg",
            name: "Student Records",
            id: "1"
        },
        {
            link: "/svg/bill.svg",
            name: "Bill Payments",
            id: "2"
        },
        {
            link: "/svg/analytics.svg",
            name: "Analytics",
            id: "3"
        },
        {
            link: "/svg/staff.svg",
            name: "Staff Records",
            id: "4"
        },
        {
            link: "/svg/notifications.svg",
            name: "Announcements",
            id: "5"
        },
        {
            link: "/svg/attendance.svg",
            name: "Academic Records",
            id: "6"
        },        
        {
            link: "/svg/webpage.svg",
            name: "Public School Profile",
            id: "7"
        },
        {
            link: "/svg/admission_link.svg",
            name: "Digitized Forms",
            id: "8"
        }    
    ]
    


    return (
        <section className="px-6 py-20 md:px-20 md:py-20 text-bluetiful bg-bluetiful-light" id="features">
            <div data-aos="fade-up" className="md:text-center mb-20">
                <h3 className="text-3xl font-bold">Our Core Features</h3>
                <p className="mb-10 text-royal-dark-blue">We provide you with cloud-based infrastructure to secure the data of Africa's next generation.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4">
                {
                    FeatureIcons.map(feature => <div data-aos="fade-up" key={feature.id} className="flex flex-col items-center mb-20">
                            <Image src={feature.link} height="70" width="70" alt={"Schoolstaq" + feature.name}/>
                            <p className="text-royal-dark-blue font-bold mt-4">{feature.name}</p>
                        </div>
                )}
            </div>
            
        </section>
    );
}

export default Features;
