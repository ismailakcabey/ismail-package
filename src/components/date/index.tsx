import { DatePicker, DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import DateIcon from '../../../src/assets/chevron-down.svg';

interface IProps{
    onDateChange: (date: string) => void;
}

const DateCmp = ({onDateChange}:IProps) => {
    dayjs.extend(customParseFormat);
    const { RangePicker } = DatePicker;
    const dateFormat = 'MMMM D YYYY'; // "July 18 2023" formatı
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        onDateChange(dateString)
      };
      // Bugünün tarihini alalım
  const today = dayjs().format(dateFormat);

  // 1 hafta öncesinin tarihini alalım
  const oneWeekAgo = dayjs().subtract(1, 'week').format(dateFormat);
        return(
            <RangePicker
            onChange={onChange}  picker="date" className="text-sm font-normal font-inter"
            defaultValue={[dayjs(oneWeekAgo), dayjs(today)]}
            format={dateFormat} // Tarih formatını belirtin
            suffixIcon={<img src={DateIcon} alt="Date Icon" />}
            />
        )
}

export default DateCmp