# [MobX React Form](https://github.com/foxhound87/mobx-react-form) Demo

## Live Demo

[https://foxhound87.github.io/mobx-react-form/demo.html](https://foxhound87.github.io/mobx-react-form/demo.html)

# Quick Start

Run:

```bash
❯ npm install
❯ npm start
```

and go to `http://localhost:8888`.

---

# Projects Linking

In order to link the demo code to the `mobx-reac-form` repo, clone both the repos as follows:

```bash
❯ git clone -b master git@github.com:foxhound87/mobx-react-form.git mobx-react-form--master
❯ git clone -b master git@github.com:foxhound87/mobx-react-form-demo.git mobx-react-form-demo--master
```

then we have different directories for each branch like this:

* mobx-react-form--master
* mobx-react-form-demo--master

and now create a symlink respectively into both directories:

```bash
❯ ln -s ../mobx-react-form-demo--master ./mobx-react-form--master/demo
❯ ln -s ../mobx-react-form--master ./mobx-react-form-demo--master/master
```

Change the code into `src/form/_.extend.js` enabling the `../../master/src` dir:

```javascript
// import MobxReactForm from 'mobx-react-form'; // eslint-disable-line // <<< COMMENT
// import MobxReactForm from '../../master/lib'; // load from build
import MobxReactForm from '../../master/src'; // load from source // <<< DECOMMENT
```

then Run in both master and demo repos:

```bash
❯ npm install
❯ npm start
```
