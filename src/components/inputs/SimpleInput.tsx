import React, {useRef} from 'react';
import { observer } from 'mobx-react';

// const ref = React.createRef()
// const ref = useRef()

export default observer(({ field }) => (
  <div className="measure">
    <label
      htmlFor={field.id}
      className="f7 db mb2 mt3 light-silver"
    >
      {field.label}
    </label>
    <input
      className="input-reset ba b--black-10 br1 pa2 mb2 db w-100 f6"
      aria-describedby="name-desc"
      {...field.bind()}
    />
    <small className="f6 db red">
      {field.error}
    </small>
  </div>
));
