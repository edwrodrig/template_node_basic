import * as tpl_project_tpl from '../src/index.js';
import {expect} from "@jest/globals";

test('basic usage', () => {
  let result = tpl_project_tpl.add(2,2);  

  expect(result).toEqual(4);
});


