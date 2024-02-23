import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, InputRef, Space } from "antd";
import { ColumnType, ColumnsType, FilterConfirmProps } from "antd/es/table/interface";
import { useEffect, useRef, useState } from "react";
//@ts-ignore
import Highlighter from 'react-highlight-words';
interface DataType {
    key: string;
    product: string;
    price: number;
    sold: number;
    profit: number;
    image: string;
  }
  type DataIndex = keyof DataType;
  type ColumnDataResult = {
    columns: ColumnsType<DataType>;
    searchedValues: { [key in DataIndex]: string };
  };
const columnData = ():ColumnDataResult => {
    const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  //@ts-ignore
  const [searchedValues, setSearchedValues] = useState<{ [key in DataIndex]: string }>({});
  const searchInput = useRef<InputRef>(null);
  useEffect(()=>{
    
  },[searchText, setSearchText,searchedValues, setSearchedValues,searchedColumn,setSearchedColumn])
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
            <div className="leading-6 text-sm font-semibold" style={{color:"#8E95A9"}}>Product</div>
        ),
        ...getColumnSearchProps('product'),
        dataIndex: 'product',
        render: (text: string,data:DataType) => <div className="flex flex-row ml-5 mr-5 pl-2 pr-5">
            <img className="mr-1 w-12 h-12" src={data.image} alt="" />
            <div style={{color:"#555F7E"}} className="m-1 text-sm leading-6">{text}</div>
        </div>,
      },
      {
        title: (
            <div className="leading-6 text-sm font-semibold" style={{color:"#8E95A9"}}>Price</div>
        ),
        dataIndex: 'price',
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
            <div className="leading-6 text-sm font-semibold" style={{color:"#8E95A9"}}>Sold</div>
        ),
        dataIndex: 'sold',
        sorter:true,
        sortIcon(props) {
          return(
            <>
            <img src="../../../src/assets/Sort.png" alt="" />
            </>
          )
      },
        render: (text: string,data:DataType) => <div style={{color:"#555F7E"}} className="ml-1 text-sm leading-6 px-2 py-2">{text}</div>,
      },
      {
        title: (
            <div className="leading-6 text-sm font-semibold" style={{color:"#8E95A9"}}>Profit</div>
        ),
        dataIndex: 'profit',
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
]
  return {columns,searchedValues}
}

export default columnData