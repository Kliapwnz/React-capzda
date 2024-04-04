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
        titleValue: "™Berserk☺ ",
        collapsed: true,
    }
}

export const ChangingAccordion = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue="™Berserk☺ " collapsed={value} onChange={()=>setValue(!value)}/>
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
export const Accordion1 = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue="™Berserk☺ "
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
    />
}