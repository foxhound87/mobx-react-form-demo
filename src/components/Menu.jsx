import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import _ from 'lodash';

const selected = menu => _.keys(_.pickBy(menu, _.identity))[0];

const switchTo = (menu, select) => (e) => {
  e.preventDefault();
  select(e.target.value);
  action(() => _.map(menu, ($val, $key) => _.set(menu, $key, false)))();
  action(() => _.set(menu, e.target.value, true))();
};

export default observer(({ menu, select }) => (
  <div className="menu clearfix">
    <a
      href="https://www.npmjs.com/package/mobx-react-form"
      className="right"
      data-tip="NPM"
    > <i className="fa fa-archive" />
    </a>
    <a
      href="https://github.com/foxhound87/mobx-react-form"
      className="right"
      data-tip="GitHub"
    > <i className="fa fa-github" />
    </a>
    <span className="left label">SELECT DEMO:</span>
    <span className="left">
      <select name="menu" onChange={switchTo(menu, select)} defaultValue={selected(menu)}>
        <option value="registerMaterial">Register (Material UI)</option>
        <option value="registerSimple">Register (Simple)</option>
        <option value="companyWidgets">Company (React Widgets)</option>
        <option value="companySimple">Company (Simple)</option>
        <option value="nestedFields">Nested Fields</option>
        <option value="markdown">Markdown</option>
      </select>
    </span>
  </div>
));
