import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const GiftBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: #e74c3c;
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Ribbon = styled.div`
  position: absolute;
  background-color: #fff;
  width: 20px;
  height: 150px;
  top: 0;
  left: calc(50% - 10px);
`;

const RibbonHorizontal = styled.div`
  position: absolute;
  background-color: #fff;
  width: 150px;
  height: 20px;
  top: calc(50% - 10px);
  left: 0;
`;

const Lid = styled(motion.div)`
  width: 150px;
  height: 30px;
  background-color: #c0392b;
  position: absolute;
  top: -30px;
  left: 0;
  border-radius: 10px 10px 0 0;
`;

const LandingPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate('/home');
    }, 2000); // Animation delay
  };

  return (
    <div className="landing-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <GiftBox onClick={handleClick}>
        <Ribbon />
        <RibbonHorizontal />
        {!isClicked && <span style={{ color: 'white', fontSize: '20px' }}>Click me</span>}
        <Lid
          initial={{ y: 0 }}
          animate={isClicked ? { y: -60 } : { y: 0 }}
          transition={{ duration: 1 }}
        />
      </GiftBox>
    </div>
  );
};

export default LandingPage;
