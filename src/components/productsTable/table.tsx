import { useEffect, useState } from "react";
import columnData from "./column";
import { ITableQueryParams } from "../mainTable/table";
import { Table, TablePaginationConfig } from "antd";
import PaginationFormatCmp from "../pagenation-format";
import { FilterValue, SorterResult } from "antd/es/table/interface";


interface DataType {
    key: string;
    qty: number;
    date: string;
    customer:string;
    revenue: number;
    netProfit: number;
    status: string;
    image:string
  }
  type DataIndex = keyof DataType;
  export const TABLE_PAGINATION: TablePaginationConfig = {
    showSizeChanger: true,
    current: 1,
    pageSize: 10,
    defaultCurrent: 1,
  };

const TableCmpProducts = () => {
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
            id:'32000200',
            customer:'Priscilla Warren',
            qty:2,
            date:"2020-06-10",
            revenue:253.82,
            netProfit:60.76,
            status:'Completed',
            image:'../../../src/assets/user1.png'
        },
        {
            //@ts-ignore
            id:'32000201',
            customer:'Tanya Wilson',
            qty:1,
            date:"2020-09-04",
            revenue:556.24,
            netProfit:66.41,
            status:'Completed',
            image:'../../../src/assets/user2.png'
        },
        {
            //@ts-ignore
            id:'32000202',
            customer:'Arlene Richards',
            qty:4,
            date:"2020-12-26",
            revenue:910.71,
            netProfit:46.52,
            status:'Shipping',
            image:'../../../src/assets/user3.png'
        },
        {
            //@ts-ignore
            id:'32000203',
            customer:'Greg Fox',
            qty:1,
            date:"2020-05-05",
            revenue:556.53,
            netProfit:17.46,
            status:'Pending',
            image:'../../../src/assets/user4.png'
        },
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

export default TableCmpProducts