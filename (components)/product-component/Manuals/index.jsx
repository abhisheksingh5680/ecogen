import { Download } from "lucide-react";

const brochures = [
    {
        title: "Ecogen290 Owners Manual",
        size: "8.1MB",
        link: "/docs/ecogen290.pdf"
    },
    {
        title: "Brochure",
        size: "9MB",
        link: "/docs/brochure.pdf"
    },
    {
        title: "Wire Controller User Manual",
        size: "4.4MB",
        link: "/docs/wire-controller.pdf"
    }
];

const BrochureList = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">BROCHURE & MANUALS</h2>
            <div className="space-y-4">
                {brochures.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-lime-200 hover:bg-lime-300 transition-colors rounded p-4 w-full shadow-md"
                    >
                        <div className="flex items-center space-x-4">
                            <Download className="text-green-900 w-6 h-6" />
                            <div>
                                <p className="text-lg font-semibold text-green-900">{item.title}</p>
                                <p className="text-sm text-green-800">PDF ({item.size})</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default BrochureList;
