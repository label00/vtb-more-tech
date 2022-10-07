import * as RadixTabs from '@radix-ui/react-tabs';
import { ReactNode } from 'react';

type TabsProps = {
  trigger: ReactNode;
  children: ReactNode;
  defaultValue: string;
}
export const Tabs = ({ trigger, children, defaultValue }: TabsProps) => {
  return (
    <RadixTabs.Root defaultValue={defaultValue}>
      <RadixTabs.List className="flex gap-8 mb-9">
        {trigger}
      </RadixTabs.List>
      {children}
    </RadixTabs.Root>
  )
}
