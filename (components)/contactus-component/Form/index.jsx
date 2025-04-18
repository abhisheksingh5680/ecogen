// export default function Form() {
//     return (
//         <section className="w-full px-6 py-12 md:py-20 bg-white">
//             <div className="max-w-4xl mx-auto grid md:grid-cols-2 ">

//                 <div className="text-gray-700 text-base space-y-2">
//                     <h2 className="text-lg font-semibold">ECOGENICA<span className="align-super text-xs">®</span> UK Ltd</h2>
//                     <p>
//                         <strong>E:</strong>{" "}
//                         <a href="mailto:info@ecogenica.co.uk" className="text-lime-600 hover:underline">
//                             info@ecogenica.co.uk
//                         </a>
//                     </p>
//                     <p>
//                         <strong>P:</strong>{" "}
//                         <a href="tel:+448082735159" className="text-lime-500 hover:underline">
//                             +44 808 273 5159
//                         </a>
//                     </p>

//                     <address className="not-italic mt-4">
//                         Unit 4 Orton House Farm<br />
//                         Norton Lane<br />
//                         Little Orton, Atherstone<br />
//                         Leicestershire<br />
//                         CV9 3NR<br />
//                         United Kingdom
//                     </address>
//                 </div>

//                 <form className="space-y-6">
//                     <h3 className="text-xl font-semibold text-gray-800">
//                         Please do contact us with any inquiries you may have.
//                     </h3>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <input
//                             type="text"
//                             placeholder="Name"
//                             className="border border-gray-400 px-4 py-2 w-full"
//                             required
//                         />
//                         <input
//                             type="email"
//                             placeholder="Email Address"
//                             className="border border-gray-400 px-4 py-2 w-full"
//                             required
//                         />
//                     </div>

//                     <textarea
//                         placeholder="Message"
//                         rows={5}
//                         className="border border-gray-400 px-4 py-2 w-full"
//                         required
//                     ></textarea>

//                     <button
//                         type="submit"
//                         className="bg-lime-300 hover:bg-lime-400 text-white font-bold py-2 px-6 rounded transition"
//                     >
//                         SUBMIT
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// }


export default function Form() {
    return (
        <section className="w-full px-6 py-12 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left Side: Contact Info */}
                <div className="text-gray-700 text-base space-y-2">
                    <h2 className="text-lg font-semibold">
                        ECOGENICA<span className="align-super text-xs">®</span> UK Ltd
                    </h2>
                    <p>
                        <strong>E:</strong>{" "}
                        <a
                            href="mailto:info@ecogenica.co.uk"
                            className="text-[#B7D283] hover:underline"
                        >
                            info@ecogenica.co.uk
                        </a>
                    </p>
                    <p>
                        <strong>P:</strong>{" "}
                        <a
                            href="tel:+448082735159"
                            className="text-[#B7D283] hover:underline"
                        >
                            +44 808 273 5159
                        </a>
                    </p>

                    <address className="not-italic mt-4 leading-relaxed">
                        Unit 4 Orton House Farm<br />
                        Norton Lane<br />
                        Little Orton, Atherstone<br />
                        Leicestershire<br />
                        CV9 3NR<br />
                        United Kingdom
                    </address>
                </div>

                {/* Right Side: Contact Form */}
                <form className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Please do contact us with any inquiries you may have.
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="border border-gray-400 px-4 py-2 w-full text-sm focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="border border-gray-400 px-4 py-2 w-full text-sm focus:outline-none"
                            required
                        />
                    </div>

                    <textarea
                        placeholder="Message"
                        rows={6}
                        className="border border-gray-400 px-4 py-2 w-full text-sm focus:outline-none"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-[#CDDC94] text-white font-bold py-2 px-6 text-sm"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </section>
    );
}
