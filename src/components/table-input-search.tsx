import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { FilterDropdownProps } from 'antd/es/table/interface';
import HighlightedText from './highlighted';

interface IProps {
  dataIndex: string;
  searchText: string;
  searchedColumn: string;
  setSearchText: (value: string) => void;
  setSearchedColumn: (value: string) => void;
  isServerSide?: boolean;
}

const TableInputSearch = <T extends {}>({
  dataIndex,
  searchedColumn,
  searchText,
  setSearchText,
  setSearchedColumn,
  isServerSide,
}: IProps): ColumnType<T> => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }: FilterDropdownProps) => (
    <div className="p-2 w-44" onKeyDown={(e) => e.stopPropagation()}>
      <Input
        placeholder={`Ara ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => {
          confirm();
          setSearchText(selectedKeys[0]?.toString());
          setSearchedColumn(dataIndex);
        }}
      />
      <Space className="mt-2">
        <Button
          type="primary"
          onClick={() => {
            confirm();
            setSearchText(selectedKeys[0]?.toString());
            setSearchedColumn(dataIndex);
          }}
          icon={<SearchOutlined />}
          size="small"
        >
          Ara
        </Button>
        <Button
          onClick={() => {
            clearFilters!();
            setSearchText('');
            confirm();
          }}
          size="small"
        >
          Temizle
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered: boolean) => (
    <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
  ),
  onFilter: (value, record: any) =>
    isServerSide
      ? true
      : record[dataIndex]
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
  render: (text) =>
    searchedColumn === dataIndex ? (
      <HighlightedText highlightedWord={searchText} text={text} />
    ) : (
      text
    ),
});

export default TableInputSearch;