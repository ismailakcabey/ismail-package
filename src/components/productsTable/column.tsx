import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, InputRef, Space } from "antd";
import { ColumnType, ColumnsType } from "antd/es/table";
import { FilterConfirmProps } from "antd/es/table/interface";
import { useEffect, useRef, useState } from "react";
//@ts-ignore
import Highlighter from 'react-highlight-words';
import StatusCmp from "../statusCmp";

interface DataType {
    key: string;
    qty: number;
    date: string;
    customer:string;
    revenue: number;
    netProfit: number;
    status: string;
    image:string;
  }
  type DataIndex = keyof DataType;

  type ColumnDataResult = {
    columns: ColumnsType<DataType>;
    searchedValues: { [key in DataIndex]: string };
    edit:boolean,
    trash:boolean,
    more:boolean,
    currentProduct:DataType
  };

  const columnData = ():ColumnDataResult =>{
    function formatDateToCustomString(dateString: string): string {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        //@ts-ignore
        return date.toLocaleDateString('en-US', options);
      }
    const [searchText, setSearchText] = useState('');
    const [edit,setEdit] = useState(false);
    const [trash,setTrash] = useState(false);
    const [more,setMore] = useState(false);
    const [currentProduct,setCurrentProduct] = useState({});
  const [searchedColumn, setSearchedColumn] = useState('');
  //@ts-ignore
  const [searchedValues, setSearchedValues] = useState<{ [key in DataIndex]: string }>({});
  const searchInput = useRef<InputRef>(null);
  useEffect(()=>{
    
  },[searchText, setSearchText,searchedValues, setSearchedValues,searchedColumn,setSearchedColumn,edit,setEdit,more,setMore,trash,setTrash,currentProduct,setCurrentProduct])
  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
    setSearchedValues((prevSearchedValues:any) => ({
        ...prevSearchedValues,
        [dataIndex]: selectedKeys[0],
      }));
  };
  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => {
        console.log("data index: " + dataIndex)
        //@ts-ignore
        if(dataIndex == 'id') console.log("id") // bu şekilde özel componentler oluşturulabilir
        return (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }} />
                <Space>
                    <Button
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        } }
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        } }
                    >
                        close
                    </Button>
                </Space>
            </div>
        );
    },
    filterIcon: (filtered: boolean) => {
        return (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        );
    },
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      {
            return searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''} />
            ) : (
                text
            );
        },
  });
  const columns:ColumnsType<DataType> = [
    {
        title: (
            <div className="leading-6 text-sm font-semibold" style={{color:"#8E95A9"}}>Orders</div>
        ),
        //@ts-ignore
        ...getColumnSearchProps('id'),
        dataIndex: 'id',
        render: (text: string,data:DataType) => <div className="flex flex-row ml-5 mr-5 pl-2 pr-5">
            <div style={{color:"#555F7E"}} className="m-1 text-sm leading-6">#{text}</div>
        </div>,
      },
      {
        title: (
            <div className="leading-6 text-sm font-semibold" style={{color:"#8E95A9"}}>Customer</div>
        ),
        //@ts-ignore
        ...getColumnSearchProps('customer'),
        dataIndex: 'customer',
        render: (text: string,data:DataType) => <div className="flex flex-row ml-5 mr-5 pl-2 pr-5">
            <div style={{color:"#555F7E"}} className="m-1 text-sm leading-6 flex flex-row">
                <img src={data.image} className="mr-5" alt="" />
                <div className="mt-3">{text}</div>
            </div>
        </div>,
      },
      {
        title: (
            <div className="leading-6 text-sm font-semibold" style={{color:"#8E95A9"}}>QTY</div>
        ),
        dataIndex: 'qty',
        ...getColumnSearchProps('qty'),
        sorter:true,
        sortIcon(props) {
            return(
              <>
              <img src="../../../src/assets/Sort.png" alt="" />
              </>
            )
        },
        render: (text: string,data:DataType) => <div style={{color:"#555F7E"}} className="ml-1 text-sm leading-6 px-2 py-2">x{text}</div>,
      },
      {
        title: (
            <div className="leading-6 text-sm font-semibold" style={{color:"#8E95A9"}}>Date</div>
        ),
        dataIndex: 'date',
        sorter:true,
        sortIcon(props) {
          return(
            <>
            <img src="../../../src/assets/Sort.png" alt="" />
            </>
          )
      },
        render: (text: string,data:DataType) => <div style={{color:"#555F7E"}} className="ml-1 text-sm leading-6 px-2 py-2">{formatDateToCustomString(text)}</div>,
      },
      {
        title: (
            <div className="leading-6 text-sm font-semibold" style={{color:"#8E95A9"}}>Revenue</div>
        ),
        dataIndex: 'revenue',
        ...getColumnSearchProps('revenue'),
        sorter:true,
        sortIcon(props) {
          return(
            <>
            <img src="../../../src/assets/Sort.png" alt="" />
            </>
          )
      },
        render: (text: string,data:DataType) => <div style={{color:"#555F7E"}} className="ml-1 text-sm leading-6 px-2 py-2">${text}</div>,
      },
      {
        title: (
            <div className="leading-6 text-sm font-semibold" style={{color:"#8E95A9"}}>Net Profit</div>
        ),
        dataIndex: 'netProfit',
        ...getColumnSearchProps('netProfit'),
        sorter:true,
        sortIcon(props) {
          return(
            <>
            <img src="../../../src/assets/Sort.png" alt="" />
            </>
          )
      },
        render: (text: string,data:DataType) => <div style={{color:"#555F7E"}} className="ml-1 text-sm leading-6 px-2 py-2">${text}</div>,
      },
      {
        title: (
            <div className="leading-6 text-sm font-semibold" style={{color:"#8E95A9"}}>Status</div>
        ),
        dataIndex: 'status',
        ...getColumnSearchProps('status'),
        sorter:true,
        sortIcon(props) {
          return(
            <>
            <img src="../../../src/assets/Sort.png" alt="" />
            </>
          )
      },
        render: (text: string,data:DataType) => <div style={{color:"#555F7E"}} className="ml-1 text-sm leading-6 px-2 py-2"><StatusCmp status={text}/></div>,
      },
      {
        title: (
            <div className="leading-6 text-sm font-semibold" style={{color:"#8E95A9"}}> </div>
        ),
        dataIndex: '',
        //@ts-ignore
        render: (text: string,data:DataType) => <div style={{color:"#555F7E"}} className="ml-1 text-sm leading-6 px-2 py-2 flex flex-row">
            <button onClick={()=>{
                setCurrentProduct(data)
                
            }}>
            <img src="../../../src/assets/edit.png" className="m-3 hover:scale-110" alt="" />
            </button>
            <button onClick={()=>{
                setCurrentProduct(data)
            }}>
            <img src="../../../src/assets/trash.png" className="m-3 hover:scale-110" alt="" />
            </button>
            <button onClick={()=>{
                setCurrentProduct(data)
            }}>
            <img src="../../../src/assets/more.png" className="m-3 hover:scale-110" alt="" />
            </button>
        </div>,
      },
  ]
  //@ts-ignore
  return {columns,searchedValues,edit,trash,more,currentProduct}
  }

  export default columnData