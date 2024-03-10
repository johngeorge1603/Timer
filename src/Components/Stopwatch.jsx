import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'


function Stopwatch() {

    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
  
    useEffect(() => {
      // Use setInterval to increment the seconds every 1000 milliseconds (1 second)
      const id = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
  
      // Store the interval ID
      setIntervalId(id);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(id);
    }, []);

      function stop() {
        clearInterval(intervalId); // Clear the interval to stop the timer
      }
    
      function reset() {
        setTimer(0);
        location.reload();
      }

  return (
    <div>
        
    <Row className='m-2 rounded-5 bg-dark'>
        <Col className=' m-5'>
            <div onClick={stop} className=' bg-warning text-center rounded-5' style={{height:'200px', width:'350px', marginTop:'20%', cursor:'pointer'}}>
                <h1 className='text-light fw-bold' style={{fontSize:'60px', paddingTop:'60px'}}>STOP</h1>
            </div>
        </Col>

        <Col>
        <div  className='bg-info text-center m-5' style={{width:'400px', height:'400px', borderRadius:'200px', paddingTop:'100px'}}>
            <h1 className='text-white' style={{fontSize:'160px'}}>{timer}</h1>
        </div>
        </Col>

        <Col className='m-5'>
        <div onClick={reset} className=' bg-light text-center rounded-5' style={{height:'200px', width:'350px', marginTop:'20%', cursor:'pointer' }}>
                <h1 className='text-warning fw-bold' style={{fontSize:'60px', paddingTop:'60px'}}>RESET</h1>
            </div>
        </Col>
    </Row>
    </div>
  )
}

export default Stopwatch