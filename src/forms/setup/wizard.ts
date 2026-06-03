/*
  Form: Multi-step Wizard
  Uses nested field groups (step1, step2, step3) with per-step validation
 */

const fields = [
  'step1.firstName',
  'step1.lastName',
  'step1.email',
  'step1.phone',
  'step2.street',
  'step2.city',
  'step2.zipCode',
  'step2.country',
  'step3.username',
  'step3.password',
  'step3.confirmPassword',
];

const values = {
  step1: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1 555-1234',
  },
  step2: {
    street: '456 Oak Avenue',
    city: 'San Francisco',
    zipCode: '94102',
    country: 'USA',
  },
  step3: {},
};

const labels = {
  'step1.firstName': 'First Name',
  'step1.lastName': 'Last Name',
  'step1.email': 'Email',
  'step1.phone': 'Phone Number',
  'step2.street': 'Street Address',
  'step2.city': 'City',
  'step2.zipCode': 'ZIP Code',
  'step2.country': 'Country',
  'step3.username': 'Username',
  'step3.password': 'Password',
  'step3.confirmPassword': 'Confirm Password',
};

const placeholders = {
  'step1.firstName': 'Enter your first name',
  'step1.lastName': 'Enter your last name',
  'step1.email': 'you@example.com',
  'step1.phone': '+1 555-0000',
  'step2.street': '123 Main St',
  'step2.city': 'New York',
  'step2.zipCode': '10001',
  'step2.country': 'USA',
  'step3.username': 'Choose a username',
  'step3.password': 'Create a password',
  'step3.confirmPassword': 'Confirm your password',
};

const rules = {
  'step1.firstName': 'required|string|min:2',
  'step1.lastName': 'required|string|min:2',
  'step1.email': 'required|email',
  'step1.phone': 'required|string|min:7',
  'step2.street': 'required|string|min:5',
  'step2.city': 'required|string|min:2',
  'step2.zipCode': 'required|string|min:4',
  'step2.country': 'required|string|min:2',
  'step3.username': 'required|string|min:3',
  'step3.password': 'required|string|min:6',
  'step3.confirmPassword': 'required|string|min:6',
};

export default {
  fields,
  values,
  labels,
  placeholders,
  rules,
};
