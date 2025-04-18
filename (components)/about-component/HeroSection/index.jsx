
export default function Hero() {
    return (
        <section
            className="relative bg-cover bg-center min-h-screen flex items-center justify-start"
            style={{ backgroundImage: "url('/aboutbg.png')" }}
        >
            <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0" />
            <div className="container mx-auto px-6 md:px-12 lg:px-20 z-10">
                <div className="max-w-2xl text-left text-white">
                    <h1 className="text-4xl md:text-5xl font-medium text-[#CDDC94]">
                        ABOUT ECOGENICA<sup className="text-sm align-super">®</sup>
                    </h1>
                    <h2 className="mt-4 text-xl md:text-2xl font-medium">
                        We are market leaders in innovation and technological improvements.
                    </h2>
                </div>
            </div>
        </section>
    );
}
