export const formatVersion = (version: string) => {
  switch (version) {
    default:
      return version.replace(/^\w/, c => c.toUpperCase());
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

export const formatLang = (lang: string) => {
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
