import TableCmp from "./table"

const MainTable = () => {
    return(
        <div className="px-5 py-5 m-7 bg-white rounded-lg ">
        <div className="flex justify-between m-5">
                <div className="text-xl font-medium leading-8 m-5">
                Latest Orders
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

export default MainTable