import { Card1, VayuBanner ,PharmaceuticalAndBiotech} from "../utils/utils";
import Description from "./Description";
import PrimaryButton from "./PrimaryButton";
import PrimaryHeading from "./PrimaryHeading";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const Aboutabt = () => {
  return (
    <>
      <Section bgImage={VayuBanner} className="h-screen flex items-center">
        {/* Overlay */}

        {/* Content */}
        <div className="relative z-20 text-white px-6 sm:px-12 lg:max-w-3xl text-center pt-20 mx-auto">
          <PrimaryHeading className="mb-4">
            Redefining Cleanroom Excellence
          </PrimaryHeading>

          <Description className="mb-6 lg:max-w-xl text-white">
            At VayuClean Technologie, we deliver precision-engineered cleanroom equipment
            and stainless steel furniture designed for the most demanding
            industries. With a reputation built on quality, innovation, and
            trust, we create solutions that ensure safety, compliance, and
            performance worldwide.
          </Description>
          <PrimaryButton to="/categories" className="mb-4">
            Explore Our Products
          </PrimaryButton>
        </div>
      </Section>
      {/* description */}
      <Section>
        <SectionTitle className="mb-16 text-center lg:max-w-4xl mx-auto">
          Shaping the Future of Cleanroom Manufacturing
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left side - Image */}
          <div>
            <img
              src={PharmaceuticalAndBiotech}
              alt="Cleanroom Manufacturing"
              className="rounded-lg shadow-lg object-cover w-full h-full max-h-[450px]"
            />
          </div>

          {/* Right side - Text content */}
          <div className="text-gray-800 space-y-6">
            <p className="mb-4">
               Since our inception, VayuClean Technologie has emerged as a trusted partner
              for pharmaceutical, biotech, food, chemical, and microelectronics
              industries. Our expertise spans design, manufacturing,
              installation, and validation of world-class cleanroom solutions.
            </p>

            <p>
              From laminar airflow systems, bio-safety cabinets, and pass boxes
              to custom stainless steel furniture — we provide turnkey solutions
              that meet international standards. Every product is tailored to
              deliver maximum reliability, efficiency, and compliance in
              controlled environments.
            </p>
            <PrimaryButton to="/contact">Discover More</PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Aboutabt;
