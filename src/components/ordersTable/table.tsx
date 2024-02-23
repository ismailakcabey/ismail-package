import { useEffect, useState } from "react";
import { Table, TablePaginationConfig } from "antd";
import PaginationFormatCmp from "../pagenation-format";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import columnData from "./column";
interface DataType {
    key: string;
    products:string[];
    date: string;
    customer:string;
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
            id:'53200002',
            products:['../../../src/assets/product5.png','../../../src/assets/product6.png','../../../src/assets/product7.png','../../../src/assets/product5.png'],
            date:"2020-02-05",
            revenue:253.82,
            netProfit:60.76,
            status:'Pending',
            customer:'Ronald Jones'
        },
        {
            //@ts-ignore
            id:'53200003',
            products:['../../../src/assets/product6.png','../../../src/assets/product7.png','../../../src/assets/product5.png','../../../src/assets/product5.png','../../../src/assets/product5.png'],
            date:"2020-09-04",
            revenue:556.24,
            netProfit:66.41,
            status:'Shipping',
            customer:'Jacob Mckinney'
        },
        {
            //@ts-ignore
            id:'53200004',
            products:['../../../src/assets/product7.png','../../../src/assets/product5.png','../../../src/assets/product6.png','../../../src/assets/product5.png','../../../src/assets/product5.png','../../../src/assets/product7.png','../../../src/assets/product5.png','../../../src/assets/product5.png'],
            date:"2020-08-30",
            revenue:115.26,
            netProfit:95.66,
            status:'Refund',
            customer:'Randall Murphy'
        },
        {
            //@ts-ignore
            id:'53200005',
            products:['../../../src/assets/product5.png','../../../src/assets/product6.png','../../../src/assets/product7.png'],
            date:"2020-08-29",
            revenue:675.51,
            netProfit:84.80,
            status:'Completed',
            customer:'Philip Web'
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

  export default TableCmp