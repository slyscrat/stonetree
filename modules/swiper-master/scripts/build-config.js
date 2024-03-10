import { parseSwiperBuildModulesEnv } from './utils/helper.js';

const envBuildModules = parseSwiperBuildModulesEnv();

export const modules = envBuildModules || [
  'virtual',
  'mousewheel',
  'navigation',
  'pagination',
  'scrollbar',
  'autoplay',
  'effect-fade',
];

export default {
  modules,
};
