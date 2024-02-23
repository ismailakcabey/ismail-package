import TableCmp from "./table"

const BestSellers = () => {
    return(
        <div className="px-5 py-5 m-5">
         <div className="flex justify-around">
                <div className="text-xl font-medium m-5 leading-8">
                Bestsellers
                </div>
                <button className='flex flex-row m-5'>
                <div className=" text-sm font-semibold leading-8 flex flex-row hover:text-base" style={{color:"#555F7E"}}>More </div>
                <img className='m-2' src="../../../src/assets/arrow-right.png" alt="" />
                </button>
            </div>
        <div>
            <TableCmp/>
        </div>
    </div>
    )
}

export default BestSellers