import { useEffect, useState } from "react";
import DateCmp from "../../components/date";
import ValueCard from "../../components/valueCard";
import OrdersTable from "../../components/ordersTable";
import GraphCmp from "../../components/ordersGraph";

const Orders = () => {
    const percentsData = [
        {
            text:"Revenue",
            percent:22,
            value:7825,
            isPercent:true,
            isPrice:true,
            isPercentValue:true
        },
        {
            text:"Orders",
            percent:-25,
            value:920,
            isPercent:true,
            isPrice:true,
            isPercentValue:true
        },
        {
            text:"Visitors",
            percent:49,
            value:15500,
            isPercent:true,
            isPrice:true,
            isPercentValue:true
        },
        {
            text:"Conversion",
            percent:1.9,
            value:28,
            isPercent:true,
            isPrice:true,
            isPercentValue:true
        }
    ]
    const data = [
      {
          "name": "Data",
          "day": "2",
          "gdp": 120
      },
      {
          "name": "Data",
          "day": "4",
          "gdp": 130
      },
      {
          "name": "Data",
          "day": "6",
          "gdp": 140
      },
      {
          "name": "Data",
          "day": "8",
          "gdp": 125
      },
      {
          "name": "Data",
          "day": "10",
          "gdp": 160
      },
      {
          "name": "Data",
          "day": "12",
          "gdp": 110
      },
      {
          "name": "Data",
          "day": "14",
          "gdp": 170
      },
      
  ]
    const [selectedDate, setSelectedDate] = useState('');
    useEffect(()=>{

    },[selectedDate,setSelectedDate])
  const handleDateChange = (date:string) => {
    setSelectedDate(date);
    console.log(date + " değeri ile tarih sorgusu atıldı")
  };
    return(
        <>
         <div className="flex justify-between m-5">
        <div className="text-2xl font-inter font-medium leading-9">
          Orders
        </div>
        <div>
            <DateCmp onDateChange={handleDateChange}/>
            <button onClick={()=>{
            }}>
            <img src="../../../src/assets/more.png" className="ml-5 hover:scale-110" alt="" />
            </button>
        </div>
      </div>
      <div className="flex justify-around flex-wrap">
      {percentsData.map((item,key:number)=>{
        return(
            <div key={key} className="m-5"><ValueCard data={item}/></div>
        )
      })}
</div>
<div className="m-5 drop-shadow-md">
<GraphCmp isHeader={true} data={data} details="Orders Update" router="" buttonName="View Details" isXAxis={true} isYAxis={true}/>
</div>
     <div className="m-5 drop-shadow-md">
     <OrdersTable/>
     </div>
      
        </>
    )
}

export default Orders