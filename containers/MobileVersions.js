import Image from "next/image";

const MobileVersions = () => {
  return (
    <section className="px-6 py-20 md:px-20 md:py-20">
      <h3 className="mb-8 text-2xl font-bold md:text-3xl md:text-center text-bluetiful">
        We're your strategic partner in scaling your school's advancement.
      </h3>

      <div className="flex flex-row items-center justify-center">
        <div className="cursor-pointer">
          <Image src="/svg/google_play.svg" height="70" width="300" />
        </div>

        <div className="hidden cursor-pointer md:block">
          <Image src="/svg/web.svg" height="70" width="300" />
        </div>

        <div className="cursor-pointer">
          <Image src="/svg/app_store.svg" height="70" width="300" />
        </div>
      </div>

      <div className="mt-4 text-center text-gray-300 text-tiny">
        <small>
          Google Play and the Google Play logo are trademarks of Google LLC. |
          &nbsp;
        </small>
        <small>Apple and the App Store logo are trademarks of Apple</small>
      </div>
    </section>
  );
};

export default MobileVersions;
