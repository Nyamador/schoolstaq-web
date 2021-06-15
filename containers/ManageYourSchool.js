import Image from 'next/image'

const ManageYourSchool = () => {
    return (
        <section className="flex flex-col md:flex-row px-6 py-20 md:px-20 md:py-20">
            <div className="md:w-6/12 text-center">
                    <Image src="/svg/macbook_mockup.svg" height="400" width="400"/>
            </div>

            <div className="md:w-6/12">
                <h3 className="text-2xl md:text-4xl md:mb-10 font-bold text-bluetiful">Manage Your School From Anywhere</h3>
                <div>
                    <p>We provide you with cloud-based infrastructure to safely secure the data of Africa’s next generation We provide you with cloud-based infrastructure to safely secure the data of Africa’s next generation We provide you with cloud-based infrastructure to safely secure the data of Africa’s next generation</p>
                </div>
            </div>
        </section>
    );
}

export default ManageYourSchool;
