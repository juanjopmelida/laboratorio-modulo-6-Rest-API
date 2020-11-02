import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface Props {
  placeholder: string;
  value: string;
  minLength?: number;
  debounce?: number;
  onChangeText: (text: string) => void;
}

export const DebounceTextField: React.FC<Props> = (props) => {
  const {
    placeholder,
    value,
    onChangeText,
    minLength = 0,
    debounce = 2000,
  } = props;

  const [innerValue, setInnerValue] = React.useState<string>(value);
  const [debounceValue, setDebounceValue] = React.useState<string>(value);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (innerValue.length >= minLength || innerValue.length === 0){
        setDebounceValue(innerValue);
      }
    }, debounce);

    return () => clearTimeout(timeout);
  }, [innerValue]);

  React.useEffect(() => {
    onChangeText(debounceValue);
  }, [debounceValue]);

  const handleTextChange = (e) => {
    setInnerValue(e.target.value.trim())
  };

  return (
    <>
      <input
        placeholder={placeholder}
        onChange={handleTextChange}
        value={innerValue}
      />
    </>
  )
};
