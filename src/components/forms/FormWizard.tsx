import React, { useState, useCallback } from 'react';
import { observer } from 'mobx-react';
import {
  ChevronRight,
  ChevronLeft,
  Check,
  User,
  MapPin,
  Settings,
  ClipboardCheck,
  Send,
  ArrowRight,
  Eye,
  EyeOff,
} from 'lucide-react';
import Input from '../inputs/SimpleInput';

const steps = [
  { key: 'step1', label: 'Personal Info', icon: User },
  { key: 'step2', label: 'Address', icon: MapPin },
  { key: 'step3', label: 'Account', icon: Settings },
  { key: 'review', label: 'Review', icon: ClipboardCheck },
];

const stepFields = {
  step1: ['firstName', 'lastName', 'email', 'phone'],
  step2: ['street', 'city', 'zipCode', 'country'],
  step3: ['username', 'password', 'confirmPassword'],
};

const StepIndicator = observer(({ currentStep, completedSteps, onGoTo }) => (
  <div className="mb-8">
    {/* Mobile: step dots */}
    <div className="flex items-center justify-center gap-2 sm:hidden overflow-visible">
      {steps.map((s, i) => {
        const isActive = i === currentStep;
        const isCompleted = completedSteps.has(i);
        return (
          <div
            key={s.key}
            onClick={() => isCompleted && onGoTo(i)}
            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-200 select-none ${
              isActive
                ? 'bg-brand-500 text-white shadow-sm'
                : isCompleted
                ? 'bg-emerald-400 text-white'
                : 'bg-surface-200 text-surface-400'
            } ${isCompleted ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
          >
            {isCompleted ? <Check size={11} /> : i + 1}
          </div>
        );
      })}
    </div>

    {/* Desktop: step labels */}
    <div className="hidden sm:flex items-center justify-center gap-0">
      {steps.map((s, i) => {
        const isActive = i === currentStep;
        const isCompleted = completedSteps.has(i);
        const isLast = i === steps.length - 1;
        return (
          <React.Fragment key={s.key}>
            <button
              onClick={() => isCompleted && onGoTo(i)}
              disabled={!isCompleted}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-brand-50 text-brand-700 border border-brand-200'
                  : isCompleted
                  ? 'text-emerald-600 hover:bg-emerald-50 cursor-pointer'
                  : 'text-surface-400'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                isActive
                  ? 'bg-brand-500 text-white'
                  : isCompleted
                  ? 'bg-emerald-500 text-white'
                  : 'bg-surface-200 text-surface-500'
              }`}>
                {isCompleted ? <Check size={12} /> : i + 1}
              </span>
              <span className="hidden lg:inline whitespace-nowrap">{s.label}</span>
            </button>
            {!isLast && (
              <div className={`w-8 h-px mx-1 ${
                isCompleted ? 'bg-emerald-300' : 'bg-surface-200'
              }`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  </div>
));

const StepContent = observer(({ step, fields }) => {
  const [showPassword, setShowPassword] = useState(false);

  const renderField = (name) => {
    const field = fields[name];
    if (!field) return null;

    if (name === 'password' || name === 'confirmPassword') {
      return (
        <div className="relative">
          <Input field={field} type={showPassword ? 'text' : 'password'} />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[30px] text-surface-400 hover:text-surface-600 transition-colors"
          >
            {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        </div>
      );
    }

    return <Input field={field} />;
  };

  return (
    <div className="space-y-4">
      {step.map((name) => (
        <div key={name}>
          <label className="block text-xs font-medium text-surface-500 mb-1">
            {fields[name]?.label || name}
          </label>
          {renderField(name)}
        </div>
      ))}
    </div>
  );
});

const ReviewCard = observer(({ title, icon: Icon, color, fields, values }) => (
  <div className={`rounded-xl border p-4 ${color}`}>
    <h3 className="text-sm font-semibold text-surface-700 mb-3 flex items-center gap-2">
      <Icon size={14} />
      {title}
    </h3>
    <div className="space-y-2">
      {fields.map(([label, value]) => (
        <div key={label} className="flex items-center justify-between text-xs">
          <span className="text-surface-400">{label}</span>
          <span className="font-medium text-surface-700">{value || '—'}</span>
        </div>
      ))}
    </div>
  </div>
));

export default observer(({ form }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const step1 = form.has('step1') ? form.$('step1') : null;
  const step2 = form.has('step2') ? form.$('step2') : null;
  const step3 = form.has('step3') ? form.$('step3') : null;

  const stepGroups = [step1, step2, step3];

  const validateStep = useCallback(async (stepIndex) => {
    const group = stepGroups[stepIndex];
    if (!group) return true;
    await group.validate({ showErrors: true });
    const valid = group.isValid;
    if (!valid) {
      setErrors((prev) => ({ ...prev, [stepIndex]: group.errors() }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[stepIndex];
        return next;
      });
    }
    return valid;
  }, [stepGroups]);

  const handleNext = useCallback(async () => {
    const valid = await validateStep(currentStep);
    if (!valid) return;
    setCompletedSteps((prev) => new Set([...prev, currentStep]));
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  }, [currentStep, validateStep]);

  const handleBack = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleGoTo = useCallback((stepIndex) => {
    setCurrentStep(stepIndex);
  }, []);

  const handleSubmit = useCallback(async () => {
    // Validate all remaining steps
    let allValid = true;
    for (let i = 0; i < stepGroups.length; i++) {
      const valid = await validateStep(i);
      if (valid) {
        setCompletedSteps((prev) => new Set([...prev, i]));
      }
      if (!valid) allValid = false;
    }

    if (allValid) {
      await form.submit();
      setSubmitted(true);
    }
  }, [validateStep, stepGroups, form]);

  const isReviewStep = currentStep === steps.length - 1;
  const currentGroup = isReviewStep ? null : stepGroups[currentStep];

  // Build field accessors for current step
  const currentFields = {};
  if (currentGroup) {
    const fieldNames = stepFields[steps[currentStep].key] || [];
    fieldNames.forEach((name) => {
      currentFields[name] = currentGroup.$(name);
    });
  }

  // Values for review step
  const reviewData = {};
  if (step1) {
    reviewData.step1 = {
      fields: [
        ['First Name', step1.$('firstName')?.value],
        ['Last Name', step1.$('lastName')?.value],
        ['Email', step1.$('email')?.value],
        ['Phone', step1.$('phone')?.value],
      ],
    };
  }
  if (step2) {
    reviewData.step2 = {
      fields: [
        ['Street', step2.$('street')?.value],
        ['City', step2.$('city')?.value],
        ['ZIP Code', step2.$('zipCode')?.value],
        ['Country', step2.$('country')?.value],
      ],
    };
  }
  if (step3) {
    reviewData.step3 = {
      fields: [
        ['Username', step3.$('username')?.value],
        ['Password', '••••••••'],
        ['Confirm Password', '••••••••'],
      ],
    };
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
          <Check size={32} className="text-emerald-600" />
        </div>
        <h2 className="text-xl font-semibold text-surface-900 mb-2">Registration Complete!</h2>
        <p className="text-sm text-surface-500 text-center max-w-md">
          Your account has been created successfully. Check your email to verify your account.
        </p>
        <button
          type="button"
          onClick={() => {
            setCurrentStep(0);
            setCompletedSteps(new Set());
            setErrors({});
            setSubmitted(false);
            form.onReset();
          }}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-brand-500 text-white hover:bg-brand-600 transition-colors"
        >
          <ArrowRight size={14} />
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="flex items-center gap-2">
            <Settings size={18} className="text-brand-500" />
            <div>
              <h2 className="text-lg font-medium text-surface-900">Multi-step Registration</h2>
              <p className="text-sm text-surface-500 mt-0.5">
                Complete all steps to create your account
              </p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <StepIndicator
            currentStep={currentStep}
            completedSteps={completedSteps}
            onGoTo={handleGoTo}
          />

          {!isReviewStep && currentGroup && (
            <div className="max-w-md mx-auto">
              <StepContent
                step={stepFields[steps[currentStep].key]}
                fields={currentFields}
              />

              {/* Step error summary */}
              {errors[currentStep] && Object.keys(errors[currentStep]).length > 0 && (
                <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-xs font-medium text-red-700 mb-1">
                    Please fix the following errors:
                  </p>
                  <ul className="text-xs text-red-600 space-y-0.5">
                    {Object.entries(errors[currentStep]).map(([path, msg]) => (
                      <li key={path} className="flex items-start gap-1.5">
                        <span className="mt-0.5 w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
                        {msg}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {isReviewStep && (
            <div className="max-w-2xl mx-auto">
              <p className="text-sm text-surface-500 mb-6 text-center">
                Review your information before submitting
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <ReviewCard
                  title="Personal Info"
                  icon={User}
                  color="bg-blue-50 border-blue-200"
                  fields={reviewData.step1?.fields || []}
                />
                <ReviewCard
                  title="Address"
                  icon={MapPin}
                  color="bg-emerald-50 border-emerald-200"
                  fields={reviewData.step2?.fields || []}
                />
                <ReviewCard
                  title="Account"
                  icon={Settings}
                  color="bg-purple-50 border-purple-200"
                  fields={reviewData.step3?.fields || []}
                />
              </div>

              {/* Form-level validation errors */}
              {form.error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 mb-4">
                  <p className="text-xs text-red-600">{form.error}</p>
                </div>
              )}
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-surface-200 max-w-md mx-auto">
            <div>
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-surface-600 hover:text-surface-900 hover:bg-surface-100 transition-all"
                >
                  <ChevronLeft size={16} />
                  Back
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              {!isReviewStep && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-medium bg-brand-500 text-white hover:bg-brand-600 transition-colors"
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              )}
              {isReviewStep && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={form.submitting || form.validating}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {form.submitting || form.validating ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                  {form.submitting ? 'Submitting...' : 'Submit Registration'}
                </button>
              )}
            </div>
          </div>

          {/* Step counter */}
          <p className="text-center text-xs text-surface-400 mt-4">
            Step {Math.min(currentStep + 1, steps.length - 1)} of {steps.length - 1}
          </p>
        </div>
      </div>
    </div>
  );
});
