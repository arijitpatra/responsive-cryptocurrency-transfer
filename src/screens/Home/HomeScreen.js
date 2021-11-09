import React, { useState } from 'react';
import './HomeScreen.scss';
import ButtonComponent from '../../components/Button/ButtonComponent';
import ModalComponent from '../../components/Modal/ModalComponent';

const HomeScreen = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (e) => {
    setIsModalOpen(true);
  } 

  return (
    <div className="home-screen">
      {
        isModalOpen ?
          <ModalComponent
            header='Transfer to Binance'
            onModalClose={() => setIsModalOpen(false)}
          /> :
          <ButtonComponent
            label='Next'
            onClick={handleButtonClick}
          />
      }
    </div>
  );
}

export default HomeScreen;
