import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
   title: "input"
};

export const ControlledInput = () => {
   const [parentValue, setParentValue] = useState("")
   return <input value={parentValue} onChange={action("want to change")}/>
}
export const ControlledCheckbox = () => {

}
export const ControlledSelect = () => {

}


export const ControlledInputWithFixedValue = () => <input value={"KLIA"}/>