

import Image from 'next/image';

const features = [
    {
        icon: '/home.png',
        title: 'Designed Specifically for the UK Home',
        description:
            'Made for customers wanting to upgrade from gas with hotter heating temperatures for years of trouble-free and reliable heating and hot water.',
    },
    {
        icon: '/wifi.png',
        title: 'Wi-Fi Enabled Remote Control',
        description:
            'A powerful and intuitive user interface enables the remote controlling of all system functions. Features include the ability to zone and manage multiple units whilst monitoring energy consumption.',
    },
    {
        icon: '/plant.png',
        title: 'Powerful Variable Speed Heat Pump',
        description:
            'Heating and hot water whenever you need it. Up to 20kW capacity. Reduces power use and reaches 75°C output temperature.',
    },
    {
        icon: '/charger.png',
        title: 'Advanced Monitoring System',
        description:
            'Real-time energy monitoring with advanced controls. Displays power usage clearly and helps reduce monthly costs.',
    },
    {
        icon: '/ear.png',
        title: 'Low Operating Noise',
        description:
            'Engineered to operate with low noise levels.',
    },
    {
        icon: '/cloud.png',
        title: 'Cold Weather Heating and Hot Water',
        description:
            'Operates from -15°C to +40°C with advanced de-icing and heat injection tech for reliability in any climate.',
    },
];

export default function FeatureSection() {
    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-green-700">
                                {feature.title}
                            </h3>
                            <p className="mt-1 text-gray-600">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
