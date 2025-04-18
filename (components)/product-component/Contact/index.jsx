import Image from "next/image";

const EnergyInfoSection = () => {
    return (
        <section className="relative bg-black text-white">
            <div className="absolute inset-0">
                <Image
                    src="/CONTACTBG.jpg"
                    alt="Green energy globe"
                    layout="fill"
                    objectFit="cover"
                    className="z-0 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-lime-200 leading-snug mb-6">
                        “Heating is the largest single source of greenhouse emissions accounting for almost a quarter of household energy use.”
                    </h2>
                    <p className="mb-4">
                        Your new Ecogenica EcogenUK290 series heat pump uses a small amount of energy to move heat from one location to another. Heat is absorbed by ozone-friendly R290, a natural refrigerant which does not contribute to global warming.
                    </p>
                    <p className="mb-4">
                        We support the UK governments in the commitment to transforming our energy supply system into one that is cheap, clean and reliable. This lays the foundation for future generations to enjoy more secure, reliable and affordable energy.
                    </p>
                    <p className="mb-8">
                        You can choose an Ecogenica product safe in the knowledge that our innovative technology is focused on energy and environment savings. Our hot water pumps are cfc free and utilise renewable energy, extracted from the air.
                    </p>
                    <button className="bg-lime-300 hover:bg-lime-400 text-black font-semibold px-6 py-3 rounded transition">
                        CONTACT US
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EnergyInfoSection;
