import Image from 'next/image'


const Features = () => {
    const FeatureIcons = [
        {
            link: "/svg/student_feature.svg",
            name: ""
        },
        {
            link: "/svg/bill.svg",
            name: ""
        },
        {
            link: "/svg/analytics.svg",
            name: ""
        },
        {
            link: "/svg/staff.svg",
            name: ""
        },
        {
            link: "/svg/attendance.svg",
            name: ""
        },        
        {
            link: "/svg/notifications.svg",
            name: ""
        },
        {
            link: "/svg/webpage.svg",
            name: ""
        },
        {
        link: "/svg/admission_link.svg",
        name: ""
    }    
    ]
    


    return (
        <section className="px-6 py-20 md:px-20 md:py-20 text-bluetiful bg-bluetiful-light">
            <div className="md:text-center">
                <h3 data-aos="fade-up" className="text-2xl md:text-4xl font-bold">Our Core Features</h3>
                <p className="mb-10">We provide you with cloud-based infrastructure to secure the data of Africa's next generation.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4">
                {
                    FeatureIcons.map(feature => <div className="flex flex-row justify-center mb-20">
                            <Image src={feature.link} height="70" width="70"/>
                        </div>
                )}
            </div>
            
        </section>
    );
}

export default Features;
