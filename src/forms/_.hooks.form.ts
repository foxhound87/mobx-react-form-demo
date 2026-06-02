import FieldInterface from "mobx-react-form/lib/models/FieldInterface";
import FormInterface from "mobx-react-form/lib/models/FormInterface";
import Form, { Field } from "mobx-react-form/src";
import { autorun, intercept, observe } from "mobx";

export default {
  // onInit(form: FormInterface) {

  // },

  onSuccess(form: FormInterface) {
    console.log("Form Values", form.values());
  },

  onError(form: FormInterface) {
    console.log("Form Errors", form.errors());
  },

  onSubmit(form: FormInterface) {
    console.log(
      "-> onSubmit HOOK -",
      form.path || "form",
      "- isValid?",
      form.isValid,
    );
  },

  onClear(form: FormInterface) {
    console.log("-> onClear HOOK -", form.path || "form");
  },

  onReset(form: FormInterface) {
    console.log("-> onReset HOOK -", form.path || "form");
  },

  onChange(form: FormInterface) {
    console.log("-> onChange HOOK on Form: ", form.name);
  },
};
