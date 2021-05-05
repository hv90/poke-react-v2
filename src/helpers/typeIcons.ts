import bugIcon from 'assets/images/icons/Bug.webp';
import darkIcon from 'assets/images/icons/Dark.webp';
import dragonIcon from 'assets/images/icons/Dragon.webp';
import electricIcon from 'assets/images/icons/Electric.webp';
import fairyIcon from 'assets/images/icons/Fairy.webp';
import fightingIcon from 'assets/images/icons/Fighting.webp';
import fireIcon from 'assets/images/icons/Fire.webp';
import flyingIcon from 'assets/images/icons/Flying.webp';
import ghostIcon from 'assets/images/icons/Ghost.webp';
import grassIcon from 'assets/images/icons/Grass.webp';
import groundIcon from 'assets/images/icons/Ground.webp';
import iceIcon from 'assets/images/icons/Ice.webp';
import normalIcon from 'assets/images/icons/Normal.webp';
import poisonIcon from 'assets/images/icons/Poison.webp';
import psychicIcon from 'assets/images/icons/Psychic.webp';
import rockIcon from 'assets/images/icons/Rock.webp';
import steelIcon from 'assets/images/icons/Steel.webp';
import waterIcon from 'assets/images/icons/Water.webp';

interface IconMap {
  [key: string]: string;
}

const iconMap: IconMap = {
  bug: bugIcon,
  dark: darkIcon,
  dragon: dragonIcon,
  electric: electricIcon,
  fairy: fairyIcon,
  fighting: fightingIcon,
  fire: fireIcon,
  flying: flyingIcon,
  ghost: ghostIcon,
  grass: grassIcon,
  ground: groundIcon,
  ice: iceIcon,
  normal: normalIcon,
  poison: poisonIcon,
  psychic: psychicIcon,
  rock: rockIcon,
  steel: steelIcon,
  water: waterIcon,
};

export const getIcon = (type: string): string => iconMap[type];

export default getIcon;
