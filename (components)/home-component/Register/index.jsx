import React from "react";

const Register = () => {
    return (
        <section
            className="relative w-full h-[550px] sm:h-[600px] md:h-[650px] lg:h-[700px] text-white bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "linear-gradient(to right, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.1) 70%), url('registerbg.png')",
            }}
        >
            <div className="relative flex items-center h-full px-4 sm:px-8 md:px-12">
                <div className="max-w-full sm:max-w-2xl md:absolute md:left-24 lg:left-32 xl:left-60">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#CDDC94] leading-tight">
                        JOIN US IN SHAPING A GREENER TOMORROW
                    </h3>
                    <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white">
                        Join us in our mission to revolutionize the way we heat our homes and businesses.
                        With <span className="font-bold">Ecogenica</span>, you can experience the perfect balance of innovation,
                        sustainability, and cost-efficiency. Together, let's pave the way towards a brighter, greener future.
                    </p>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white font-medium">
                        Let us introduce you to Ecogenica at the Installer Show at the NEC, Birmingham, the
                        leading event for the heating and plumbing industry!
                    </p>
                    <button className="mt-6 sm:mt-8 bg-[#cddc94] text-black font-bold px-6 py-3 rounded hover:bg-lime-300 transition duration-300">
                        REGISTER
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Register;
