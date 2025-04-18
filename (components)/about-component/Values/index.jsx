export default function Values() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-20 text-white"
            style={{ backgroundImage: "url('/valuesbg.jpg')" }}
        >

            <div className="absolute inset-0  z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    OUR VALUES
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center">
                        <img
                            src="/innovation.png"
                            alt="Innovation"
                            className="w-16 h-16 mb-4 text-[#CDDC94]"
                        />
                        <h4 className="text-xl font-medium text-[#CDDC94] mb-3">
                            INNOVATION
                        </h4>
                        <p className="text-base leading-relaxed font-medium max-w-xs mx-auto">
                            Ecogenica has a track record of being ahead of the curve in product development,
                            and our new range is no exception. Combining a sleek design and versatility,
                            the new Ecogenica products are designed with the customer in mind.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src="/sustainability.png"
                            alt="Sustainability"
                            className="w-16 h-16 mb-4 text-[#CDDC94]"
                        />
                        <h4 className="text-xl font-medium text-[#CDDC94] mb-3">
                            SUSTAINABILITY
                        </h4>
                        <p className="text-base leading-relaxed font-medium max-w-sm mx-auto">
                            Ecogenica is dedicated to reducing carbon footprints and promoting greener technology.
                            Our heat pumps provide efficient heating while minimizing environmental impact,
                            ensuring sustainable warmth without compromise.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src="/costefficiency.png"
                            alt="Cost-Efficient Comfort"
                            className="w-16 h-16 mb-4 text-[#CDDC94]"
                        />
                        <h4 className="text-xl font-medium text-[#CDDC94] mb-3">
                            COST-EFFICIENT COMFORT
                        </h4>
                        <p className="text-base leading-relaxed font-medium max-w-xs mx-auto">
                            Ecogenica aims to reduce costs and expenses for our customers.
                            Our heat pumps are engineered to optimize energy efficiency,
                            helping you save money on your heating bills without sacrificing comfort.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
