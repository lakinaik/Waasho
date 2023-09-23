import BookButton from "./BookButton"

const ServicePlan =({icon, title})=>{
    return(
        <>
        <div className="shadow-lg md:p-4 p-2 max-w-[350px] duration-300 hover:-translate-y-5">
            <div className=" w-[80px]">
            <img src={icon} alt="img" />
            </div>

            <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <div className="mt-8 mb-3">
                <BookButton/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ServicePlan