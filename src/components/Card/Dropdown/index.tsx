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
}

const Dropdown: React.FC<DropdownProps> = ({ data }: DropdownProps) => {
  const flavorTexts = data;
  let targetVer = 'alpha_sapphire';
  // for (const entry of flavorTexts) {
  //   if (entry.language.name === 'en') {
  //     targetVer = entry.version.name;
  //     break;
  //   }
  // }
  flavorTexts.map(entry => {
    if (entry.language.name === 'en' && targetVer === 'alpha_sapphire') {
      targetVer = entry.version.name;
    }
    return entry;
  });
  return (
    // TODO: add onChange as prop
    <DropdownSelect>
      {flavorTexts.map(entry => (
        <option
          className="listElement"
          value={`${entry.language.name}—${entry.version.name}`}
          key={`${entry.language.name}—${entry.version.name}`}
          selected={
            entry.language.name === 'en' && entry.version.name === targetVer
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
