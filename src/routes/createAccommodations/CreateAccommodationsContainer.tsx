import React, { useState } from 'react';
import { Address } from 'react-daum-postcode';
import useInput from '../../hooks/useInput';
import CreateAccommodationsPresenter from './CreateAccommodationsPresenter';

const CreateAccommodationsContainer = () => {
  /**
   * 주소 입력 모달
   * @remarks
   * true -> On, false -> Off
   */
  const [modalToggle, setModalToggle] = useState(false);
  /**
   * 주소
   * @remarks
   * 주소는 유저가 input에 직접 입력하지 않음.
   */
  const [address, setAddress] = useState('주소를 검색해주세요.');
  const priceInput = useInput('0');
  const descriptionInput = useInput();

  const changeModalToggle = () => {
    setModalToggle((s) => !s);
  };

  /**
   * 주소 찾기 callback
   */
  const handleCompletePostcode = (data: Address) => {
    const fullAddress = data.address;
    setAddress(fullAddress);
  };

  return (
    <CreateAccommodationsPresenter
      toggle={modalToggle}
      modalToggle={changeModalToggle}
      postcodeOnComplete={handleCompletePostcode}
      address={address}
    />
  );
};

export default CreateAccommodationsContainer;
