import {Accordion} from './Accordion';
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
   title: "Accordion",
   component: Accordion,
};


export const ChangingAccordion = () => {
   const [value, setValue] = useState<boolean>(true)
   return <Accordion titleValue="Accordion "
                     collapsed={value}
                     onChange={() => setValue(!value)}
                     items={["Evgeniy", "Anastasiya", "Kristina"]}
   />
}

const onChangeHandler = action("accordion mode!!")

export const CollapsedAccordion = () =>
   <Accordion titleValue={"Accordion Collapsed"}
              collapsed={true}
              onChange={onChangeHandler}
              items={[]}
   />

export const OpenedAccordion = () =>
   <Accordion titleValue={"Accordion Opened"}
              collapsed={false}
              onChange={onChangeHandler}
              items={["Evgeniy", "Anastasiya", "Kristina"]}
   />

export const AccordionDemo = () => {
   const [collapsed, setCollapsed] = useState(false)
   return <Accordion titleValue={"Accordion"}
                     collapsed={collapsed}
                     onChange={() => {
                        setCollapsed(!collapsed)
                     }}
                     items={["Evgeniy", "Anastasiya", "Kristina"]}
   />
}