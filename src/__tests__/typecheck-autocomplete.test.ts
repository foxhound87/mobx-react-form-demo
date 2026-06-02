import type { FieldDefinition, PathsOf } from 'mobx-react-form';
import Form from 'mobx-react-form';
import type { NestedClubFields } from '../forms/types';

// ===== Test 1: FieldDefinition props autocomplete =====
// If this compiles, the IDE will autocomplete all field props
const testFields: Record<string, FieldDefinition> = {
  username: {
    value: 'test',
    label: 'Username',
    placeholder: 'Enter username',
    rules: 'required|string|min:3',
    type: 'text',
    disabled: false,
    related: ['email'],
    default: 'defaultUser',
    initial: 'initUser',
    bindings: 'MaterialTextField',
    extra: { key: 'val' },
    validators: [],
    validatedWith: 'value',
    nullable: false,
    autoFocus: true,
    inputMode: 'text',
    autoComplete: 'username',
    input: (v: any) => v,
    output: (v: any) => v,
    converter: (v: any) => v,
    name: 'myField',
    hooks: { onInit: (f: any) => console.log(f) },
    handlers: { onChange: (f: any) => (e: any) => console.log(e) },
  },
};

// ===== Test 2: Transparent nested path autocomplete =====
// PathsOf<F> is embedded in $() signature — no explicit import needed!
class TestForm extends Form<NestedClubFields> {}

const form = new TestForm({ fields: [] }, { name: 'test' });

// Top-level keys — autocomplete from keyof F
const _f1 = form.$('club');

// Nested paths — autocomplete from PathsOf<F> (transparent!)
const _f2 = form.$('club.name');
const _f3 = form.$('club.city');
const _f4 = form.$('members[].firstname');
const _f5 = form.$('members[].lastname');
const _f6 = form.$('members[].hobbies');
const _f7 = form.$('members');

// ===== Test 3: Explicit PathsOf type still works =====
type TestPaths = PathsOf<NestedClubFields>;
// Expected: "club" | "members" | "club.name" | "club.city"
//           | "members[].firstname" | "members[].lastname" | "members[].hobbies"

const _p1: TestPaths = 'club';
const _p2: TestPaths = 'club.name';
const _p3: TestPaths = 'members[].firstname';
const _p4: TestPaths = 'members[].hobbies';
