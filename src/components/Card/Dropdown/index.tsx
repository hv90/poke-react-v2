import { formatLang, formatVersion } from 'helpers/formats';
import React from 'react';
import { DropdownSelect } from './styles';

interface FlavorEntry {
  // eslint-disable-next-line camelcase
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}

interface DropdownProps {
  data: FlavorEntry[];
  onChange: (value: string) => void;
  defaultFlavor: { lang: string; ver: string };
}

const Dropdown: React.FC<DropdownProps> = ({
  data,
  onChange,
  defaultFlavor,
}: DropdownProps) => {
  return (
    <DropdownSelect onChange={e => onChange(e.target.value)}>
      {data.map(entry => (
        <option
          className="listElement"
          value={`${entry.language.name}—${entry.version.name}`}
          key={`${entry.language.name}—${entry.version.name}`}
          selected={
            entry.language.name === defaultFlavor.lang &&
            entry.version.name === defaultFlavor.ver
          }
        >
          {`${formatLang(entry.language.name)} — ${formatVersion(
            entry.version.name,
          )}`}
        </option>
      ))}
    </DropdownSelect>
  );
};

export default Dropdown;
