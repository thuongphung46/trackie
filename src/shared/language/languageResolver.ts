import LanguageInterface from './LanguageInterface';
import {LANGUAGE} from 'src/shared/Constant';
import {en} from './en';
import {vn} from './vn';

interface StringToObject {
  [key: string]: LanguageInterface;
}

const languageJson: StringToObject = {
  [LANGUAGE.ENGLISH]: en,
  [LANGUAGE.VIETNAM]: vn,
};

export default languageJson;
