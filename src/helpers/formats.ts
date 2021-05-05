export const capitalize = (str: string): string =>
  // eslint-disable-next-line implicit-arrow-linebreak
  str.replace(/^\w/, c => c.toUpperCase());

export const formatVersion = (version: string): string => {
  switch (version) {
    default:
      return capitalize(version);
    case 'leafgreen':
      return 'Leaf Green';
    case 'firered':
      return 'Fire Red';
    case 'heartgold':
      return 'Heart Gold';
    case 'soulsilver':
      return 'Soul Silver';
    case 'black-2':
      return 'Black 2';
    case 'white-2':
      return 'White 2';
    case 'omega-ruby':
      return 'Omega Ruby';
    case 'alpha-sapphire':
      return 'Alpha Sapphire';
    case 'lets-go-pikachu':
      return "Let's Go, Pikachu!";
    case 'lets-go-eevee':
      return "Let's Go, Eevee!";
  }
};

export const formatLang = (lang: string): string => {
  switch (lang) {
    default:
      return lang.toUpperCase();
    case 'ja-Hrkt':
      return 'JA<k>';
    case 'zh-Hant':
      return 'ZH<t>';
    case 'zh-Hans':
      return 'ZH<s>';
  }
};
