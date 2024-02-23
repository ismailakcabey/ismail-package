import { Pie, PieConfig } from "@ant-design/plots";

interface MainData{
  type: string;
  value: number;
  price: number;
}

const RevuenceTraffic = () => {
  const mainData:MainData[] = [
    {
      type: 'Desktop',
      value: 65.2,
      price:830.03
    },
    {
        type: 'Mobile',
        value: 18.6,
        price:755.75
      },
      {
        type: 'Tablet',
        value: 10.3,
        price: 550.81
      },
      {
        type: 'Unknow',
        value: 5.8,
        price:150.84
      },
]
let data:any = []
mainData.map((item:MainData)=>{
  data.push({
    type:item.type,
    value:item.value
  })
})
      const config:PieConfig = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: false,
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
        legend:false,
        color: ['#FF392B', '#2F80ED', '#00C3F8', '#FF8901'], // Turuncu, Kırmızı, Mavi ve Turkuaz renkleri
        statistic: {
            title: false,
            content: {
              style: {
                whiteSpace: 'pre-wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            },
          },
      };
    return (
        <div className="px-5 py-5">
            <div className="flex justify-around">
                <div className="text-xl font-medium m-5 leading-8">
                    Revenue by device
                </div>
                <button className='flex flex-row m-5'>
                <div className=" text-sm font-semibold leading-8 flex flex-row hover:text-base" style={{color:"#555F7E"}}>More </div>
                <img className='m-2' src="../../../src/assets/arrow-right.png" alt="" />
                </button>
            </div>

        <div>
        <Pie {...config} />
        </div>
        <div className="flex justify-around flex-row max-xl:flex-col">
          {
            mainData.map((item:MainData,key:number)=>{
              return(
                <div key={key} className="flex justify-around flex-row m-5 ">
                  <img className="h-2 w-2 m-2" src={'../../../src/assets/dot'+key+".png"} alt="" />
                  <div className="m-1 text-sm font-normal" style={{color:"#8E95A9"}}>{item.type}</div>
                  <div className="m-1 font-medium text-sm font-medium" style={{color:"#1C2A53"}}>${item.price}</div>
                  <div className=" m-1 text-sm font-normal" style={{color:"#8E95A9"}}>{item.value}%</div>
                </div>
              )
            })
          }
        </div>
        </div>
    )
}

export default RevuenceTraffic