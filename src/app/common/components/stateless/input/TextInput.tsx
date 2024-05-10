import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';
import { Input } from 'antd';
import React from 'react';

export type TextInputProps = Readonly<{
  className?: string;
  error?: string | null;
  label?: string;
  maxLength?: number;
  required?: boolean;
}>;

export const TextInput = React.forwardRef(
  ({ className, error, label, maxLength, required, ...restOfProps }: TextInputProps, ref) => (
    <Input
      className={className}
      maxLength={maxLength}
      placeholder={`${label}${required ? ' *' : ''}`}
      prefix={error ? <ExclamationCircleOutlined /> : <span />}
      status={error ? 'error' : undefined}
      variant="filled"
      {...restOfProps}
    />
  )
);
