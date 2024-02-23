
interface IProps{
    status:string
}

const StatusCmp = ({status}:IProps) => {
    const colorConvert = (status:string) => {
        if(status == 'Pending'){
            return '#FF392B'
        }
        else if(status == 'Shipping'){
            return '#1C2A53'
        }
        else if(status == 'Refund'){
            return '#FFA000'
        }
        else{
            return '#279F51'
        }
    }
    return(
        <div style={{color:`${colorConvert(status)}`}}>
            {status}
        </div>
    )
}

export default StatusCmp