import React from 'react';
import { observer } from 'mobx-react';
import {
  ComboBox,
  Label,
  Input,
  Popover,
  ListBox,
  ListBoxItem,
  Button,
} from 'react-aria-components';
import { ChevronDown } from 'lucide-react';

export default observer(({ field }) => (
  <div className="mb-4">
    <ComboBox
      selectedKey={field.value}
      onSelectionChange={field.onChange}
      className="w-full"
      allowsCustomValue={false}
    >
      <Label className="block text-sm font-medium text-surface-700 mb-1.5">
        {field.label}
      </Label>
      <div className="relative">
        <Input
          placeholder={field.placeholder || 'Type to search...'}
          className="w-full rounded-lg border border-surface-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-surface-900 shadow-soft focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors"
        />
        <Button className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
          <ChevronDown size={16} className="text-surface-400" />
        </Button>
      </div>
      <Popover className="z-20 w-[--trigger-width] rounded-lg bg-white shadow-elevated ring-1 ring-black/5">
        <ListBox className="py-1 max-h-60 overflow-auto focus:outline-none">
          {(field.extra || []).map((opt) => {
            const val = opt.value || opt;
            const label = opt.label || opt;
            return (
              <ListBoxItem
                key={val}
                id={val}
                textValue={label}
                className={({ isFocused, isSelected }) =>
                  `relative cursor-pointer select-none py-2 px-3.5 text-sm ${
                    isFocused ? 'bg-brand-50 text-brand-700' : 'text-surface-700'
                  } ${isSelected ? 'font-medium bg-brand-50' : 'font-normal'}`
                }
              >
                {label}
              </ListBoxItem>
            );
          })}
        </ListBox>
      </Popover>
    </ComboBox>
    {field.error && <p className="form-error-text">{field.error}</p>}
  </div>
));
