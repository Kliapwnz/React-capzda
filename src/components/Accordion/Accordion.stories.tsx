import type {Meta, StoryObj} from '@storybook/react';

import {Accordion} from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
   component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>

export const FirstStory: Story = {
   args: {
      titleValue: "Hello",
      collapsed: true,
      onChange: () => {
      }
   }
}

export const ChangingAccordion = () => {
   const [value, setValue] = useState<boolean>(true)
   return <Accordion titleValue="™Berserk☺ " collapsed={value} onChange={() => setValue(!value)}/>
}

export const CollapsedAccordion = () => {
   return <Accordion titleValue="Accordion Collapsed"
                     collapsed={true}
                     onChange={() => {
                     }}
   />
}
export const OpenedAccordion = () => {
   return <Accordion titleValue="Accordion Opened"
                     collapsed={false}
                     onChange={() => {
                     }}
   />
}
export const AccordionDemo = () => {
   const [collapsed, setCollapsed] = useState(false)
   return <Accordion titleValue="Accordion"
                     collapsed={collapsed}
                     onChange={() => {
                        setCollapsed(!collapsed)
                     }}
   />
}