import { SectionTag } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionTag>
      {title === 'Phonebook' ? <h1>{title}</h1> : <h2>{title}</h2>}

      {children}
    </SectionTag>
  );
};
