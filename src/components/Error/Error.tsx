import Image from "next/image";
import errorGraphics from "@/app/Assets";
import GradientText from "@/app/Components/GradientText";

const Error = ({ data }: { data?: object }) => {

    const defaultError = {
        title: "Something went wrong!",
        reason: "Error stack missing."
    }
    return (
        <section>
            {
                <div className="flex gap-5 max-sm:flex-col items-center justify-center">
                    <div>
                        <Image src={errorGraphics[0].asset} className="w-auto max-w-96 h-auto" alt="Error-illustration" width={500} height={500} />
                    </div>
                    <div className="text-center">
                        <h3 className="font-bold text-4xl"><GradientText>Error: </GradientText>{defaultError.title}</h3>
                        <h6 className="">Reason: {defaultError.title}</h6>
                    </div>
                </div>
            }
        </section>
    )
}

export default Error