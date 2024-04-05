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
                     items={[
                        {title: "Evgeniy", value: 1},
                        {title: "Anastasiya", value: 1},
                        {title: "Kristina", value: 1}]}
                     onClick={onClickCallback}
   />
}

const onChangeHandler = action("accordion mode!!")
const onClickCallback = action("some item was clicked")

export const CollapsedAccordion = () =>
   <Accordion titleValue={"Accordion Collapsed"}
              collapsed={true}
              onChange={onChangeHandler}
              items={[]}
              onClick={onClickCallback}
   />

export const OpenedAccordion = () =>
   <Accordion titleValue={"Accordion Opened"}
              collapsed={false}
              onChange={onChangeHandler}
              items={[
                 {title: "Evgeniy", value: 1},
                 {title: "Anastasiya", value: 1},
                 {title: "Kristina", value: 1}]}
              onClick={onClickCallback}
   />

export const AccordionDemo = () => {
   const [collapsed, setCollapsed] = useState(false)
   return <Accordion titleValue={"Accordion"}
                     collapsed={collapsed}
                     onChange={() => {
                        setCollapsed(!collapsed)
                     }}
                     items={[
                        {title: "Evgeniy", value: 1},
                        {title: "Anastasiya", value: 1},
                        {title: "Kristina", value: 1}]}
                     onClick={onClickCallback}
   />
}