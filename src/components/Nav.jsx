import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import _ from 'lodash';

const switchTo = (menu, select) => (e) => {
  e.preventDefault();
  select(e.target.value);
  action(() => _.map(menu, ($val, $key) => _.set(menu, $key, false)))();
  action(() => _.set(menu, e.target.value, true))();
};

export default observer(({ menu, select, selected }) => (
  <div className="z-9999 bg-near-white fixed top-0 left-0 right-0">
    <nav className="dt w-100 center tc tl-ns">
      <span className="dtc v-mid pv2 ph3 w6">
        <span className="bg-light-red b--light-red ba bw1 pv2 br2 white">
          <b className="mh2 dn di-ns">DEMOS</b>
          <select className="select" name="menu" onChange={switchTo(menu, select)} defaultValue={selected}>
            <option value="registerMaterial">Register (Material UI)</option>
            <option value="registerSimple">Register (Simple)</option>
            <option value="companyWidgets">Company (React Widgets)</option>
            <option value="companySimple">Company (Simple)</option>
            <option value="nestedFields">Nested Fields</option>
            <option value="fileUpload">File Upload</option>
            <option value="markdown">Markdown</option>
            <option value="dynamicFieldsSelect">Dynamic Fields Select</option>
          </select>
        </span>
      </span>
      <div className="v-mid tr dn dtc-ns cf">
        <a
          href="https://www.npmjs.com/package/mobx-react-form"
          data-tip="NPM"
          className="dib db fr pa3 f3 light-red"
        > <i className="fa fa-archive" />
        </a>
        <a
          href="https://github.com/foxhound87/mobx-react-form"
          data-tip="GitHub"
          className="dib db fr pa3 f3 light-red"
        > <i className="fa fa-github" />
        </a>
      </div>
    </nav>
  </div>
));
