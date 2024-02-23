import ValueCard from "../../valueCard"

const SalesForecast = () => {
    const data = [
        {
            text: "Revenue",
            percent: 24.2,
            value: 8950,
            isPercent: true,
            isPrice: false,
            isPercentValue:false
        },
        {
            text: "Net Profit",
            percent: -2.5,
            value: 1520,
            isPercent: true,
            isPrice: false,
            isPercentValue:false
        },
        {
            text: "Orders",
            percent: 32.8,
            value: 8950,
            isPercent: true,
            isPrice: false,
            isPercentValue:false
        },
        {
            text: "Visitors",
            percent: 60,
            value: 1520,
            isPercent: true,
            isPrice: false,
            isPercentValue:false
        },
    ]
    return(
        <div className="px-5 py-5">
        <div className="flex justify-around">
                <div className="text-xl font-medium m-5 leading-8">
                Sales forecast
                </div>
                <button className='flex flex-row m-5'>
                <div className=" text-sm font-semibold leading-8 flex flex-row hover:text-base" style={{color:"#555F7E"}}>More </div>
                <img className='m-2' src="../../../src/assets/arrow-right.png" alt="" />
                </button>
            </div>

            <div className="flex justify-around flex-wrap max-lg:flex-col">
                {data.map((item: any, key: number) => {
                    return (
                        <div key={key} className=" m-5">
                            <ValueCard data={item} />
                        </div>
                    )
                })}
            </div>
        
    </div>
    )
}

export default SalesForecast