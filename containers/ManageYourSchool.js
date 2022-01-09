import Image from "next/image";

const ManageYourSchool = () => {
  return (
    <section className="flex flex-col px-6 py-20 pb-0 md:flex-row md:px-20 md:py-20 md:pb-0">
      <div className="order-2 text-center md:order-1 md:w-6/12">
        <Image src="/svg/macbook_mockup.svg" height="400" width="400" />
      </div>

      <div className="order-1 md:order-2 md:w-6/12">
        <h3 className="text-3xl font-bold md:mb-10 text-bluetiful">
          Manage Your School From Anywhere
        </h3>
        <div>
          <p className="text-royal-dark-blue">
            With our cloud-based infrastructure, you can readily access your
            institutions data anywhere and at anytime. No need to worry about
            data backup and security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManageYourSchool;
