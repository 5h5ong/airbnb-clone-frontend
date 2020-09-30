import { useState } from 'react';

export interface UseInputReturnPropsType {
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}
export interface UseInputReturnType {
  props: UseInputReturnPropsType;
  utils: {
    setValue: React.Dispatch<React.SetStateAction<string>>;
  };
}

const useInput = (initialValue = ''): UseInputReturnType => {
  const [value, setValue] = useState(initialValue);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const {
      target: { value: eventValue },
    } = event;

    setValue(eventValue);
  };

  return { props: { value, onChange }, utils: { setValue } };
};

export default useInput;
