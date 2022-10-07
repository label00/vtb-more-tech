import * as RadixTabs from '@radix-ui/react-tabs';
import { ReactNode } from 'react';

type TabProps = {
  children: ReactNode;
  value: string;
}

export const Tab = ({ children, value }: TabProps) =>
  <RadixTabs.Trigger className="font-semibold radix-state-inactive:opacity-40 radix-state-inactive:hover:opacity-100" value={value}>
      {children}
  </RadixTabs.Trigger>
