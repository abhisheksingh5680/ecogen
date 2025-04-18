import React from "react";

const EfficiencyTable = () => {
    const data = [
        ["ECO-2P-VS-EU", "Medium temperature application", 5.194, 3.803, 3.774, 148, 2843, "A++"],
        ["", "Low temperature application", 5.362, 5.035, 4.986, 196.5, 2222, "A+++"],
        ["ECO-3P-VS-EU", "Medium temperature application", 7.931, 3.652, 3.631, 142.2, 4513, "A++"],
        ["", "Low temperature application", 8.014, 4.837, 4.8, 189, 3450, "A+++"],
        ["ECO-4P-VS-EU", "Medium temperature application", 9.205, 3.502, 3.485, 136.4, 5457, "A++"],
        ["", "Low temperature application", 10.201, 4.562, 4.536, 178.4, 4646, "A+++"],
        ["ECO-6P-VS-EU", "Medium temperature application", 14.204, 3.807, 3.793, 148.7, 7736, "A++"],
        ["", "Low temperature application", 16.167, 5.243, 5.221, 205.8, 6398, "A+++"]
    ];

    return (
        <div className="px-4 py-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-green-800 mb-3">EFFICIENCY CLASSES</h1>
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
                Medium temperature application A++ <br />
                Low temperature application A+++
            </h2>
            <p className="text-gray-600 mb-6">
                Our heat pumps are designed to deliver exceptional energy efficiency, ensuring optimal performance across a range
                of temperatures and applications. Based on the latest SGS test results, our models stand out for their superior
                seasonal coefficient of performance (SCOP) and seasonal efficiency (ηs), positioning them among the best in the
                industry.
            </p>

            <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-300">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="border p-2">Model</th>
                            <th className="border p-2">Application</th>
                            <th className="border p-2">Pdesignh</th>
                            <th className="border p-2">SCOPon</th>
                            <th className="border p-2">SCOP</th>
                            <th className="border p-2">ηs</th>
                            <th className="border p-2">QHE (kWh)</th>
                            <th className="border p-2">Efficiency classes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx} className="odd:bg-white even:bg-gray-50">
                                {row.map((cell, i) => (
                                    <td key={i} className="border p-2 whitespace-nowrap">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EfficiencyTable;
