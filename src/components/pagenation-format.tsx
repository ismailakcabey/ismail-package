interface IProps {
    total: number;
    range: number[];
  }
  
  const PaginationFormatCmp = ({ total, range }: IProps) => {
    return <div>{`${range[0]}/${range[1]} - ${total} Page`}</div>;
  };
  
  export default PaginationFormatCmp;
  