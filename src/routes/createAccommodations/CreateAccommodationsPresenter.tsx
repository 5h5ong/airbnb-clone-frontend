import React from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';
import styled from 'styled-components';
import BaseInput from '../../components/inputs/BaseInput';
import {
  Title,
  TextWithDescription,
  WhiteBoxWithShadow,
  BaseModal,
  RedButton,
} from '../../styles/sharedStyled';

interface CreateAccommodationsPresenterProps {
  toggle: boolean;
  modalToggle: () => void;
  postcodeOnComplete?: (address: Address) => void;
  address: string;
}

const LootContainer = styled.div`
  max-width: ${(props) => props.theme.size.maxWidth};
  margin-left: auto;
  margin-right: auto;
  .title-and-content {
    width: 100%;
    margin: 50px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-row-gap: 30px;
  }
`;
const TextWithInput = styled(TextWithDescription)`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2px;
  .text {
    align-self: center;
  }
  .description {
    grid-row: 1/2;
    grid-column: 1 / span 4;
    color: gray;
    font-size: 5px;
  }
  .input-all {
    grid-row: 2/3;
    grid-column: 1 / span 4;
  }
  .input-1-3 {
    grid-row: 2/3;
    grid-column: 1 / span 3;
  }
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const CreateAccommodationsPresenter: React.FC<CreateAccommodationsPresenterProps> = ({
  toggle,
  modalToggle,
  postcodeOnComplete,
  address,
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
          <Form>
            <TextWithInput>
              <div className="description">숙소 이름</div>
              <div className="input-all">
                <BaseInput />
              </div>
            </TextWithInput>
            <TextWithInput>
              <div className="description">요금</div>
              <div className="input-all">
                <BaseInput />
              </div>
            </TextWithInput>
            <TextWithInput>
              <div className="description">주소</div>
              <div className="input-1-3 text">{address}</div>
              <RedButton type="button" onClick={modalToggle}>
                검색
              </RedButton>
            </TextWithInput>
            <TextWithInput>
              <div className="description">설명</div>
              <div className="input-all">
                <BaseInput />
              </div>
            </TextWithInput>
          </Form>
        </div>
      </WhiteBoxWithShadow>
    </LootContainer>
  );
};

export default CreateAccommodationsPresenter;
