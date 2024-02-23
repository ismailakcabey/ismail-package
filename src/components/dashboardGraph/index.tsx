import { Column, ColumnConfig } from '@ant-design/plots';
type DataType = {
    type: string;
    value: number;
  };
const DashboardGraph = () => {
    const data: DataType[] = [
        {
            type: '20',
            value: 800,
        },
        {
            type: '22',
            value: 7000,
        },
        {
            type: '24',
            value: 5000,
        },
        {
            type: '26',
            value: 6000,
        },
        {
            type: '28',
            value: 500,
        },
        {
            type: '30',
            value: 5400,
        },
        {
            type: '2',
            value: 2200,
        },
        {
            type: '4',
            value: 6000,
        },
        {
            type: '6',
            value: 6000,
        },
        {
            type: '8',
            value: 500,
        },
        {
            type: '10',
            value: 5400,
        },
        {
            type: '12',
            value: 2200,
        },
        {
            type: '14',
            value: 6000,
        },
        {
            type: '16',
            value: 800,
        },
    ];
    const paletteSemanticRed = '#ff392b';
    const brandColor = '#ff8902';
    const config:ColumnConfig = {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: '',
        color: (originData) => {
            if (originData.type == "2" ) {
                return paletteSemanticRed;
            }

            return brandColor;
        },
        label: {
            content: (originData:any) => {
                const val = originData.value

                if (val < 0.05) {
                    return (val * 100).toFixed(1) + '%';
                }
            },
            offset: 10,
        },
        minColumnWidth: 10,
        maxColumnWidth: 10,
        columnStyle: {
            fillOpacity: 0.9,
            radius: [20, 20, 0, 0],
             marginBottom: 5,
          },
        legend: false,
        xAxis: {
            grid: null, // Set grid to null to remove x-axis gridlines
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        scrollbar: {
            type: 'horizontal',
          },
        yAxis: {
            grid: null, // Set grid to null to remove y-axis gridlines
          },
    };
    return (
        <>
            <div className="flex justify-between flex wrap">
                <div className=" text-xl font-medium m-5 leading-8">Dashboard</div>
                <button className='flex flex-row m-5'>
                <div className=" text-sm font-semibold leading-8 flex flex-row hover:text-base" style={{color:"#555F7E"}}>Advanced Report </div>
                <img className='m-2' src="../../../src/assets/arrow-right.png" alt="" />
                </button>
            </div>
            <div className="m-5">
                <Column {...config} />
            </div>
        </>
    )
}

export default DashboardGraph