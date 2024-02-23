import Table, { ColumnsType } from "antd/es/table";
//@ts-ignore
import Highlighter from 'react-highlight-words';
import columnData from "./column";
import { useEffect } from "react";

interface DataType {
    key: string;
    product: string;
    price: number;
    sold: number;
    profit: number;
    image: string;
  }
const TableCmp = () => {
    const { columns, searchedValues } = columnData();
    useEffect(()=>{
        console.log(searchedValues," Bestsellers table query")
    })
    const data:DataType[] = [
        {
            //@ts-ignore
            id:'1',
            product:'Deco accessory',
            price:21.19,
            sold:409,
            profit:1822.87,
            image:'../../../../../src/assets/product0.png'
        },
        {
            //@ts-ignore
            id:'2',
            product:'Pottery Vase',
            price:14.18,
            sold:396,
            profit:8545.25,
            image:'../../../../../src/assets/product1.png'
        },
        {
            //@ts-ignore
            id:'3',
            product:'Rose Holdback',
            price:18.15,
            sold:243,
            profit:7287.01,
            image:'../../../../../src/assets/product2.png'
        },
        {
            //@ts-ignore
            id:'4',
            product:'Flowering Cactus',
            price:74.16,
            sold:636,
            profit:9325.47,
            image:'../../../../../src/assets/product3.png'
        }
    ]
    return (
        <>
        <Table
        scroll={{ x:100 }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
        </>
    )
}

export default TableCmp