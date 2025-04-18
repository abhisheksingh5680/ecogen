import React from 'react';

const content = [
    {
        title: 'OUR COMMITMENT TO INNOVATION',
        text: 'Ecogenica has a track record of being ahead of the curve in product development, and our new range is no exception. Combining a sleek design, and versatility, the new Ecogenica products are designed with the customer in mind.',
        image: '/commitment.png',
        reverse: false,
    },
    {
        title: 'SUSTAINABLE HEATING SOLUTIONS',
        text: 'Ecogenica is dedicated to reducing carbon footprints and promoting greener technology. Our heat pump products deliver heating while minimizing environmental impact, ensuring sustainable warmth without compromise.',
        image: '/heating-solution.png',
        reverse: true,
    },
    {
        title: 'COST-EFFICIENT COMFORT',
        text: 'Ecogenica aims to optimize cost savings for our customers. Our heat pumps are engineered to provide outstanding efficiency, helping you save money on your heating bills without sacrificing comfort.',
        image: '/comfort.png',
        reverse: false,
    },
];

const Quality = () => {
    return (
        <section className="py-20 bg-white">
            <div className="mx-auto flex flex-col ">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                            } gap-6 lg:gap-0`}
                    >
                        <div className="w-full lg:w-1/2 ">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-[#ebeaea]">
                            <div>
                                <h4 className="text-[#57703C] text-2xl font-medium mb-2 tracking-wide">
                                    <span>{item.title}</span>
                                </h4>
                                <p className="text-[#666] text-base max-w-xl font-semibold">{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Quality;
