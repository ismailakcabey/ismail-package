import { Col, Row, Select, SelectProps, Space } from "antd"
import { useEffect, useState } from "react";
import DateCmp from "../date";
interface ItemProps {
  label: string;
  value: string;
}
const Step3 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
  }, [isMobile]);
  const optionsCheck: ItemProps[] = [{
    label: 'Every Hour',
    value: 'Every Hour'
  },
  {
    label: 'Every Day',
    value: 'Every Day'
  },
  {
    label: 'Every Second',
    value: 'Every Second'
  },
  ];
  const optionsTimeRange: ItemProps[] = [{
    label: 'Today',
    value: 'Today'
  },
  {
    label: 'Yesterday',
    value: 'Yesterday'
  },
  {
    label: 'Tomorrow',
    value: 'Tomorrow'
  },
  ];
  const [valueCheck, setValueCheck] = useState([]);
  const [timeRange, setTimeRange] = useState([]);
  const selectPropsCheck: SelectProps = {
    mode: 'multiple',
    style: { width: isMobile ? '100px' : '300px', height: '35px' },
    value: valueCheck,
    options: optionsCheck,
    onChange: (newValue) => {
      setValueCheck(newValue);
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
  };
  const selectPropsTimeRange: SelectProps = {
    mode: 'multiple',
    style: { width: isMobile ? '100px' : '300px', height: '35px' },
    value: timeRange,
    options: optionsTimeRange,
    onChange: (newValue) => {
      setTimeRange(newValue);
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
  };
  const [selectedDate, setSelectedDate] = useState('');
  useEffect(() => {

  }, [selectedDate, setSelectedDate])
  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    console.log(date + " değeri ile tarih sorgusu atıldı")
  }
  return (
    <>
      <Row style={{ margin: "5px" }}>
        <div style={{ marginTop: "12px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#FF8901" />
          </svg>
        </div>
        <div style={{ margin: "5px", color: '#1C2A53', fontSize: "24px", fontWeight: "500" }}>
          Time manage
        </div>
      </Row>
      <Row style={{ justifyContent: 'flex-start', padding: "5px", margin: "5px" }}>
        <Col style={{ margin: "5px" }}>
          <div style={{ color: '#8E95A9', fontSize: "14px", fontWeight: '500' }}>
            Check
          </div>
          <div>
            <Space direction="vertical" style={{ width: '300px', height: '35px' }}>
              <Select {...selectPropsCheck} />
            </Space>
          </div>
        </Col>
        <Col style={{ margin: "5px" }}>
          <div style={{ color: '#8E95A9', fontSize: "14px", fontWeight: '500' }}>
            Time range
          </div>
          <div>
            <Space direction="vertical" style={{ width: '300px', height: '35px' }}>
              <Select {...selectPropsTimeRange} />
            </Space>
          </div>
        </Col>
        <Col style={{margin:'5px'}}>
          <div style={{ color: '#8E95A9', fontSize: "14px", fontWeight: '500' }}>
            Run length
          </div>
          <div>
            <DateCmp onDateChange={handleDateChange} />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Step3