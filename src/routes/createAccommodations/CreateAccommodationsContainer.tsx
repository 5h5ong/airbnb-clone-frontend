import React, { useState } from 'react';
import { Address } from 'react-daum-postcode';
import useInput from '../../hooks/useInput';
import { fileToDataUri } from '../../libs/file';
import CreateAccommodationsPresenter from './CreateAccommodationsPresenter';

/**
 * 사용될 image state의 타입
 * @remarks
 * 이미지를 표시하기 위해 uri을 File과 같이 엮음.
 */
export interface ImageFile {
  file: File;
  uri: string;
}

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
  /**
   * 유저가 집어넣은 이미지의 집합
   */
  const [image, setImage] = useState<ImageFile[]>([]);
  const nameInput = useInput();
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

  /**
   * 파일 업로드 callback
   *
   * @remarks
   * input에서 전해지는 파일들은 FileList라는 타입을 가짐. 인덱스로 값을 조회할 수 있지만
   * map으로는 조회할 수 없음. 이걸 state에 바로 넣으면 사용하는데 좋지 않다고 생각함.
   * 그래서 FileList 안의 데이터를 추출해 저장함.
   *
   * 이미지를 표시해주기 위해 uri가 필요함. 파일을 받는 동시에 uri를 추출해 state에 넣어줌.
   *
   * !파일의 사이즈가 크다보니 약간의 보틀넥이 있음. 나중에 개선할 방법을 고민해봐야 함.
   */
  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    let result: ImageFile[] = [];

    if (files) {
      for (const file of files) {
        result = [
          ...result,
          {
            file: file,
            uri: await fileToDataUri(file),
          },
        ];
      }
      setImage(result);
    }
  };

  return (
    <CreateAccommodationsPresenter
      toggle={modalToggle}
      modalToggle={changeModalToggle}
      postcodeOnComplete={handleCompletePostcode}
      fileInputChange={handleFileInputChange}
      files={image}
      address={address}
      input={{
        price: priceInput,
        description: descriptionInput,
        name: nameInput,
      }}
    />
  );
};

export default CreateAccommodationsContainer;
