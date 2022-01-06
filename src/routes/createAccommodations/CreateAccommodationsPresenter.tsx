import React from 'react';
import { Spinner } from 'react-bootstrap';
import DaumPostcode, { Address } from 'react-daum-postcode';
import styled from 'styled-components';
import BaseInput from '../../components/inputs/BaseInput';
import { UseInputReturnType } from '../../hooks/useInput';
import {
  Title,
  TextWithDescription,
  WhiteBoxWithShadow,
  BaseModal,
  RedButton,
  GrayButton,
} from '../../styles/sharedStyled';
import { ImageFile } from './CreateAccommodationsContainer';

interface CreateAccommodationsPresenterProps {
  toggle: boolean;
  modalToggle: () => void;
  postcodeOnComplete?: (address: Address) => void;
  fileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  files: ImageFile[];
  address: string;
  input: {
    price: UseInputReturnType;
    description: UseInputReturnType;
    name: UseInputReturnType;
  };
}

const LootContainer = styled.div`
  max-width: ${(props) => props.theme.size.maxWidth};
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  .title-and-content {
    width: 100%;
    margin: 50px;
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 30px;
  }
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 60px);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  .form-span-col-2 {
    grid-column: span 2;
  }
  /* 그리드 오른쪽 하단 */
  .form-end-end {
    grid-column: 3 / span 1;
    grid-row: 3 / span 1;
  }
`;
const TextWithInput = styled(TextWithDescription)`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2px;
  grid-column-gap: 5px;
  .text {
    align-self: center;
  }
  .description {
    grid-row: 1/2;
    grid-column: 1 / span 4;
    color: gray;
    font-size: 12px;
  }
  .input-all {
    grid-row: 2/3;
    grid-column: 1 / span 4;
  }
  .input-1-3 {
    grid-row: 2/3;
    grid-column: 1 / span 3;
  }
  .input-c-4-span1 {
    grid-row: 2/3;
    grid-column: 4 / span 1;
  }
  .input-4-4 {
    grid-row: 1/3;
    grid-column: 4 / span 1;
  }
`;
const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #ebebeb;
`;
const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const CreateAccommodationsPresenter: React.FC<CreateAccommodationsPresenterProps> = ({
  toggle,
  modalToggle,
  postcodeOnComplete,
  fileInputChange,
  formSubmit,
  files,
  address,
  input,
  loading,
}) => {
  return (
    <LootContainer>
      {toggle && (
        <BaseModal>
          <DaumPostcode onComplete={postcodeOnComplete} />
        </BaseModal>
      )}
      <WhiteBoxWithShadow>
        <div className="title-and-content">
          <Title>숙소 생성</Title>
          <Form onSubmit={formSubmit}>
            <TextWithInput>
              <div className="description">숙소 이름</div>
              <div className="input-all">
                <BaseInput
                  required
                  value={input.name.props.value}
                  onChange={input.name.props.onChange}
                />
              </div>
            </TextWithInput>
            <TextWithInput>
              <div className="description">요금</div>
              <div className="input-all">
                <BaseInput
                  required
                  placeholder="0"
                  value={input.price.props.value}
                  onChange={input.price.props.onChange}
                  prefix="￦"
                />
              </div>
            </TextWithInput>
            <TextWithInput>
              <div className="description">주소</div>
              <div className="input-1-3">
                <BaseInput
                  required
                  placeholder="주소를 검색해주세요"
                  value={address}
                />
              </div>
              <RedButton
                className="input-c-4-span1"
                type="button"
                onClick={modalToggle}
              >
                검색
              </RedButton>
            </TextWithInput>
            <TextWithInput className="form-span-col-2">
              <div className="description">설명</div>
              <div className="input-all">
                <BaseInput
                  value={input.description.props.value}
                  onChange={input.description.props.onChange}
                />
              </div>
            </TextWithInput>
            <TextWithInput>
              <div className="description">이미지</div>
              <input
                required
                className="input-all"
                type="file"
                multiple
                onChange={fileInputChange}
              />
            </TextWithInput>
            <TextWithInput className="form-end-end">
              {loading ? (
                <GrayButton className="input-4-4" disabled>
                  <Spinner animation="border" size="sm" />
                </GrayButton>
              ) : (
                <RedButton type="submit" className="input-4-4">
                  생성
                </RedButton>
              )}
            </TextWithInput>
          </Form>
          <Divider />
          {/* 이미지가 없을 때 component를 감춤 */}
          {!!files.length && (
            <TileGrid>
              {files.map((file) => (
                <Img src={file.uri} />
              ))}
            </TileGrid>
          )}
        </div>
      </WhiteBoxWithShadow>
    </LootContainer>
  );
};

export default CreateAccommodationsPresenter;
