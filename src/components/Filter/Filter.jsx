import { Span, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <Span>Find contacts by name</Span>

      <Input type="text" value={value} onChange={onChange} />
    </label>
  );
};
