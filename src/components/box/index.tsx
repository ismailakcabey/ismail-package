
interface IProps{
    baseImage:string;
    baseTitle:string;
    secondTitle:string;
    details:DataType[]
}
interface DataType{
    image:string,
    title:string,
    detail:string;
}
const Box = ({baseImage,baseTitle,secondTitle,details}:IProps) => {

    return(
        <div className="">
        <div className="flex place-items-center flex-col">
            <img className="m-5" src={baseImage}  />
            <div className="font-bold text-sm" style={{color:"#1C2A53"}}>{baseTitle}</div>
            <div className="" style={{color:"#8E95A9"}}>{secondTitle}</div>
            <img className="m-5" src="../../../src/assets/line.png"  />
        </div>
        {details.map((detail:DataType)=>{
                return(
                    <>
                    <div className="flex justify-items-start flex-row">
                        <img src={detail?.image} alt={detail.image} className="m-5 w-5 h-5"/>
                        <div className="m-5 flex flex-col">
                            <div className="font-semibold" style={{color:"#1C2A53"}}>{detail.title}</div>
                            <div className="m-1 " style={{color:"#8E95A9"}}>{detail.detail}</div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    )
}

export default Box