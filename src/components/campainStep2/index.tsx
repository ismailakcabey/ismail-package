import { Col, Input, Row, Select, SelectProps, Space } from "antd";
import { useEffect, useState } from "react";
interface ItemProps {
  label: string;
  value: string;
}
const Step2 = () => {
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
  const options: ItemProps[] = [{
    label: 'All Customers',
    value: 'All Customers'
  },
  {
    label: 'All Dealers',
    value: 'All Dealers'
  },
  {
    label: 'All Brands',
    value: 'All Brands'
  },
  {
    label: 'All Users',
    value: 'All Users'
  },
  ];

  const [value, setValue] = useState([]);
  const selectProps: SelectProps = {
    mode: 'multiple',
    style: { width: isMobile ? '100px' : '300px', height: '35px' },
    value,
    options: options,
    onChange: (newValue) => {
      setValue(newValue);
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
  };
  return (
    <>
      <Row style={{ margin: "5px" }}>
        <div style={{ marginTop: "12px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#FF8901" />
          </svg>
        </div>
        <div style={{ margin: "5px", color: '#1C2A53', fontSize: "24px", fontWeight: "500" }}>
          Audience
        </div>
      </Row>
      <Row style={{ justifyContent: 'flex-start', padding: "5px", margin: "5px" }}>
        <Col style={{margin:'5px'}}>
          <div style={{ color: '#8E95A9', fontSize: "14px", fontWeight: '500' }}>
            Target Customers
          </div>
          <div>
            <Input
              style={{ width: isMobile ? 'auto' : '300px', height: '35px' }}
            />
          </div>
        </Col>
        <Col style={{margin:'5px'}}>
          <div style={{ color: '#8E95A9', fontSize: "14px", fontWeight: '500' }}>
            Email Only
          </div>
          <div>
            <Input
              style={{ width: isMobile ? 'auto' : '300px', height: '35px' }}
            />
          </div>
        </Col>
        <Col style={{margin:'5px'}}>
          <div style={{ color: '#8E95A9', fontSize: "14px", fontWeight: '500' }}>
            Sms Only
          </div>
          <div>
            <Input
              style={{ width: isMobile ? 'auto' : '300px', height: '35px' }}
            />
          </div>
        </Col>
        <Col style={{margin:'5px'}}>
          <div style={{ color: '#8E95A9', fontSize: "14px", fontWeight: '500' }}>
            Customers
          </div>
          <div>
            <Space direction="vertical" style={{ width: '300px', height: '35px' }}>
              <Select {...selectProps} />
            </Space>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Step2