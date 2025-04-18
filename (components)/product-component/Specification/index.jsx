import Image from "next/image";

const models = ["Ecogen290-6", "Ecogen290-11", "Ecogen290-14", "Ecogen290-21"];
const images = ["/models/model-6.png", "/models/model-11.png", "/models/model-14.png", "/models/model-21.png"];

const rows = [
    ["ERP Level", "A+++", "A+++", "A+++", "A+++"],
    ["Refrigerant Type", "R290", "R290", "R290", "R290"],
    ["WiFi enabled", "YES", "YES", "YES", "YES"],
    ["Heating Capacity Range (kW)", "2.5–7.5", "3.5–11.5", "5.2–14.5", "7.8–22.5"],
    ["Heating Power Input Range (kW)", "0.85–2.0", "0.7–2.7", "1.05–3.6", "1.8–6.4"],
    ["SCOP (W)", "4.99", "4.88", "5.14", "5.21"],
    ["Heating Capacity Range (kW)", "2.3–8.5", "3.0–10.8", "4.0–13.7", "6.5–20.8"],
    ["Heating Power Input Range (kW)", "0.85–2.2", "0.8–3.5", "1.1–3.4", "1.75–4.8"],
    ["SCOP (W)", "3.77", "3.65", "3.49", "3.76"],
    ["Max Power Input (kW)", "2.8", "4.0", "5.7", "7.9"],
    ["Max Current Input (A)", "13", "18", "29", "23"],
    ["Power Supply", "220-240V~/50Hz", "220-240V~/50Hz", "220-240V~/50Hz", "380-415V~/3N/50Hz"],
    ["Compressor Type", "ROTARY", "ROTARY", "ROTARY", "ROTARY"],
    ["Noise dB(A)", "52", "53", "55", "58"],
    ["Water Connections (inch)", "1", "1", "1", "1.25"],
    ["Water Flow Volume (L/min)", "23", "33", "40", "60"],
    ["Unit Dimensions (L×W×H mm)", "1043×400×885", "1205×474×945", "1205×474×945", "1400×485×1435"],
    ["Net Weight (kg)", "65", "88", "95", "198"],
];

export default function ModelSpecifications() {
    return (
        <div className="px-4 py-8 overflow-x-auto">
            <h2 className="text-2xl font-bold text-green-700 mb-6">Models & Specifications</h2>
            <table className="min-w-full border text-sm text-left text-gray-700">
                <thead>
                    <tr className="bg-green-100">
                        <th className="border px-4 py-2">Model</th>
                        {models.map((model, idx) => (
                            <th key={idx} className="border px-4 py-2 font-semibold">
                                {model}
                            </th>
                        ))}
                    </tr>
                    <tr className="bg-green-50">
                        <td className="border px-4 py-2 font-medium">Image</td>
                        {images.map((src, i) => (
                            <td key={i} className="border px-4 py-2">
                                <Image src={src} alt={`Model ${models[i]}`} width={100} height={80} />
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-gray-50" : ""}>
                            {row.map((cell, colIdx) => (
                                <td key={colIdx} className="border px-4 py-2 whitespace-nowrap">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
