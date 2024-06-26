import { Alert } from 'antd';
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  classes?: string;
}>;

export const ErrorAlert = ({ children, classes }: Props) => (
  <Alert className={classes} message={children} showIcon type="error" />
);
