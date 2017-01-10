import Form from './_.extend';

// forms
import markdown from './markdown';
import nestedFields from './nestedFields';
import registerSimple from './registerSimple';
import registerMaterial from './registerMaterial';
import companySimple from './companySimple';
import companyWidgets from './companyWidgets';

class NestedFieldsForm extends Form {}
class MarkdownForm extends Form {}
class RegisterMaterialForm extends Form {}
class RegisterSimpleForm extends Form {}
class CompanySimpleForm extends Form {}
class CompanyWidgetsForm extends Form {}

export default {

  nestedFields: new NestedFieldsForm({ ...nestedFields }, { name: 'Nested Fields' }),
  markdown: new MarkdownForm({ ...markdown }, { name: 'Markdown' }),
  registerMaterial: new RegisterMaterialForm({ ...registerMaterial }, { name: 'Register Material' }),
  registerSimple: new RegisterSimpleForm({ ...registerSimple }, { name: 'Register Simple' }),
  companySimple: new CompanySimpleForm({ ...companySimple }, { name: 'Company Simple' }),
  companyWidgets: new CompanyWidgetsForm({ ...companyWidgets }, { name: 'Company Widgets' }),

};
