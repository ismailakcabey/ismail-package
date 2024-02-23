import { Button, Col, Divider, Row } from "antd"
import { useEffect, useState } from "react";
import Step1 from "../../components/campainStep1";
import Step2 from "../../components/campainStep2";
import Step3 from "../../components/campainStep3";
import Rules from "../../components/rules";

interface ItemProps {
    label: string;
    value: string;
  }

const Campains = () => {
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
    const options: ItemProps[] = [];
    for (let i = 10; i < 36; i++) {
        const value = i.toString(36) + i;
        options.push({
          label: `Long Label: ${value}`,
          value,
        });
      }
    return(
        <>
        <div style={{color:'#1C2A53',fontSize:24,fontWeight:500}}>
        Create New Campaign
        </div>
        <div style={{backgroundColor:'white',borderRadius:"12px", padding:"8px",margin:"5px"}}>
            <Col>
            <Step1/>
            <Step2/>
            <Step3/>
            <Rules/>
            <Divider />
            <Row style={{justifyContent:'end'}}>
              <div>
                <Button style={{border:'none',boxShadow:'none',color:'#1C2A53',fontWeight:'600',margin:'5px'}}>Cancel</Button>
              </div>
              <div>
                <Button style={{border:'none',boxShadow:'none',backgroundColor:'#FF8901',color:'#FFF',fontWeight:'14px',margin:'5px'}}>Save Campaign</Button>
              </div>
            </Row>
            </Col>
        </div>
        </>
    )
}

export default Campains