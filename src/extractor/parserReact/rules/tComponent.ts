import { tComponentGeneral } from '../../parser/rules/tComponentGeneral.js';
import { RuleType } from '../../parser/types.js';
import type { ReactTokenType } from '../ParserReact.js';

// <T keyName="test">Default</T>
// ^^-----------------------^^^^
export const tComponent = {
  trigger: 'trigger.t.component',
  call(context) {
    return tComponentGeneral(context);
  },
} satisfies RuleType<ReactTokenType>;
