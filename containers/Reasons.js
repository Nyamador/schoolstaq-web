import Image from "next/image";

const Reasons = () => {
  return (
    <div className="px-6 py-20 md:px-20 md:py-20 text-bluetiful" id="about">
      <div>
        <h2 className="text-3xl font-bold md:text-center">
          What makes our platform one of a kind
        </h2>
      </div>

      <section className="md:flex md:flex-row">
        <div className="md:w-6/12">
          <div
            className="flex flex-row items-center justify-center w-full"
            style={{ height: "300px", width: "300px" }}
          >
            <Image src="/svg/card_banner.svg" width="auto" height="auto" />
          </div>
          <h3 className="text-2xl font-bold">Unique Identity</h3>
          <p className="text-royal-dark-blue">
            Students registered under schoolstaq have a universally unique
            identity, making it easier to admit students from any other
            institution using schoolstaq.
          </p>
        </div>

        <div className="md:w-6/12">
          <div
            className="flex flex-row items-center justify-center w-full"
            style={{ height: "300px", width: "300px" }}
          >
            <Image src="/svg/server.svg" width="auto" height="auto" />
          </div>
          <h3 className="text-2xl font-bold">Data Integrity</h3>
          <p className="text-royal-dark-blue">
            Trust us, your data is safely secured and encrypted in the cloud.
            Retrieving data aged over a decade is simple without sorting through
            piles of paperwork to find a single transcript or student
            information.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Reasons;
