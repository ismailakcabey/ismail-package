import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const CartDashboard = () => {
    return(
        <>
        <div className="flex justify-between flex wrap m-5 ">
            <div>
                Cart
            </div>
            <div>
                <img className="m-5" src="../../../src/assets/info.png" alt="" />
            </div>
        </div>
        <div className="flex items-center justify-center">
    <div className="m-5 flex items-center justify-center h-40 w-40 rounded-full bg-white shadow-lg">
    <CircularProgressbar  value={38} text='38%' styles={buildStyles({
              textColor: '#1C2A53',
              pathColor: '#623cea',
              trailColor: '#D3D3D3',
            })}/>
    </div>
</div>
        <div className="flex flex-row justify-around m-5 text-sm font-medium leading-6" style={{color:"#1C2A53"}}>
            <div >Adandoned Cart</div>
            <div  >720</div>
        </div>
        <div className="flex flex-row justify-around m-5 text-sm font-medium leading-6" style={{color:"#8E95A9"}}>
            <div>Adandoned Revenue</div>
            <div>$5,900</div>
        </div>
        </>
    )
}

export default CartDashboard