import { Button } from 'antd';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const SubmitButton = ({ children, className }: Props) => (
  <Button className={className} htmlType="submit" size="large" type="primary">
    {children}
  </Button>
);
