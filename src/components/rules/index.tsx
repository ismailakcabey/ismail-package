import { Button, Col, Input, Row, Select } from "antd"
import { useEffect, useState } from "react";

const Rules = () => {
    const handleChangeType = (value: string) => {
        console.log(`selected ${value}`);
      };
      const handleChangeMath = (value: string) => {
        console.log(`selected ${value}`);
      };
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
    const rules = [
        {
            condition:'If',
            type:'Spend',
            math:'=',
            price:100
        },
        {
            condition:'And',
            type:'Increase budget',
            math:'$',
            price:60
        },
        {
            condition:'Then',
            type:'Spend',
            math:'=',
            price:100
        }
    ]
    return(
        <>
        <Col style={{margin:'5px'}}>
        <Row style={{ margin: "5px" }}>
        <div style={{ marginTop: "12px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#FF8901" />
          </svg>
        </div>
        <div style={{ margin: "5px", color: '#1C2A53', fontSize: "24px", fontWeight: "500" }}>
          Create Rules
        </div>
      </Row>
      {rules.map((rule)=>{
        return(
            <Col>
            <Row style={{margin:'15px'}}>
                <svg style={{margin:'10px'}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#FF8901" />
          </svg>
          <div style={{margin:'5px',marginRight:'50px',color:'#FF8901'}}>
            {rule.condition}
          </div>
            <Select
      defaultValue={rule.type}
      style={{width: isMobile ? '100px' : '200px', height: '35px',marginRight:'20px'}}
      onChange={handleChangeType}
      options={[
        { value: 'Spend', label: 'Spend' },
        { value: 'Increase budget', label: 'Increase budget' },
      ]}
    />
     <Select
      defaultValue={rule.math}
      style={{width: '75px', height: '35px' ,marginRight:'20px'}}
      onChange={handleChangeMath}
      options={[
        { value: '=', label: '=' },
        { value: '+', label: '+' },
        { value: '-', label: '-' },
        { value: '$', label: '$' },
      ]}
    />
    <Input defaultValue={`$${rule.price}`} style={{width:'70px'}}/>
    <Button style={{border:'none',boxShadow:'none'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
<path d="M13.9999 25.6668C20.4432 25.6668 25.6666 20.4435 25.6666 14.0002C25.6666 7.55684 20.4432 2.3335 13.9999 2.3335C7.5566 2.3335 2.33325 7.55684 2.33325 14.0002C2.33325 20.4435 7.5566 25.6668 13.9999 25.6668Z" stroke="#C8CAD8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 10.5L10.5 17.5" stroke="#C8CAD8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 10.5L17.5 17.5" stroke="#C8CAD8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </Button>
            </Row>
            </Col>
        )
      })}
        <Button style={{border:'none',boxShadow:'none',color:'#1C2A53',fontWeight:'600'}}>+ New Rule</Button>
        </Col>
        </>
    )
}

export default Rules