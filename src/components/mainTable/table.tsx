import { useEffect, useState } from "react";
import columnData from "./column";
import { Table, TablePaginationConfig } from "antd";
import PaginationFormatCmp from "../pagenation-format";
import { FilterValue, SorterResult } from "antd/es/table/interface";
interface DataType {
    key: string;
    image: string;
    product: string;
    qty:number;
    date: string;
    revenue: number;
    netProfit: number;
    status: string;
  }
  export interface ITableQueryParams<T> {
    pagination: TablePaginationConfig;
    filters?: Record<string, FilterValue | null>;
    sorter?: SorterResult<T> | SorterResult<T>[];
    include?: string[];
    typeWithFilters?: string[];
  }
  export const TABLE_PAGINATION: TablePaginationConfig = {
    showSizeChanger: true,
    current: 1,
    pageSize: 10,
    defaultCurrent: 1,
  };
  type DataIndex = keyof DataType;
const TableCmp = () => {
    const { columns, searchedValues,edit,trash,more,currentProduct } = columnData();
    console.log(currentProduct,"currentProduct")
    const [tableParams, setTableParams] = useState<ITableQueryParams<any>>({
        pagination: {
          current: TABLE_PAGINATION.defaultCurrent,
          pageSize: TABLE_PAGINATION.pageSize,
        },
      });
    useEffect(()=>{
        console.log(searchedValues,tableParams.pagination," latest orders table query")
    })
    const data:DataType[] = [
        {
            //@ts-ignore
            id:'1',
            product:'Deco accessory',
            qty:2,
            date:"2020-02-05",
            revenue:253.82,
            netProfit:60.76,
            status:'Pending',
            image:'../../../src/assets/product5.png'
        },{
            //@ts-ignore
            id:'2',
            product:'Basket with handles',
            qty:3,
            date:"2020-09-08",
            revenue:556.24,
            netProfit:66.41,
            status:'Shipping',
            image:'../../../src/assets/product6.png'
        },
        {
            //@ts-ignore
            id:'3',
            product:'Flower vase',
            qty:3,
            date:"2020-12-21",
            revenue:115.26,
            netProfit:95.66,
            status:'Refund',
            image:'../../../src/assets/product7.png'
        },
        {
            //@ts-ignore
            id:'4',
            product:'Deco accessory',
            qty:2,
            date:"2020-08-13",
            revenue:675.51,
            netProfit:84.80,
            status:'Completed',
            image:'../../../src/assets/product8.png'
        },
        {
            //@ts-ignore
            id:'5',
            product:'Pottery Vase',
            qty:2,
            date:"2020-05-08",
            revenue:910.71,
            netProfit:46.52,
            status:'Shipping',
            image:'../../../src/assets/product9.png'
        },
        {
            //@ts-ignore
            id:'6',
            product:'Rose Holdback',
            qty:4,
            date:"2020-10-15",
            revenue:897.90,
            netProfit:81.54,
            status:'Completed',
            image:'../../../src/assets/product10.png'
        },
        {
            //@ts-ignore
            id:'7',
            product:'Table Lamp',
            qty:4,
            date:"2020-09-14",
            revenue:563.43,
            netProfit:17.46,
            status:'Pending',
            image:'../../../src/assets/product11.png'
        }
    ]
    
      const handleTableChange = (
        pagination: TablePaginationConfig,
        filters: Record<string, FilterValue | null>,
        sorter: SorterResult<any> | SorterResult<any>[]
      ) => {
        setTableParams({
          ...tableParams,
          pagination,
          filters,
          sorter,
        });
        console.log(pagination)
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
          
        }
      };
    return(
        <>
        <Table
        scroll={{ x:100 }}
        columns={columns}
        dataSource={data}
        onChange={handleTableChange}
        pagination={{
            ...TABLE_PAGINATION,
            ...tableParams.pagination,
            total: 100,
            style:{
            },
            showTotal: (total, range) => <PaginationFormatCmp total={total} range={range} />,
          }}
      />
        </>
    )
}

export default TableCmp