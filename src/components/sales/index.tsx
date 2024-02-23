import BestSellers from "./bestSellers"
import SalesForecast from "./salesForecast"

const SalesDash = () => {
    return(
        <>
        <div className="flex justify-around flew-row max-lg:flex-col">
            <div className="bg-white px-5 py-5 m-5 rounded-lg ">
                <BestSellers/>
            </div>
            <div className="bg-white px-5 py-5 m-5 rounded-lg ">
                <SalesForecast/>
            </div>
        </div>
        </>
    )
}

export default SalesDash