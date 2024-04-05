import {useState} from "react";

export default {
   title: "input"
};

export const ControlledInput = () => {
   const [parentValue, setParentValue] = useState("")
   return <input value={parentValue} onChange={(event) => {
      setParentValue(event.currentTarget.value)
   }}/>
}
export const ControlledCheckbox = () => {

}
export const ControlledSelect = () => {

}


export const ControlledInputWithFixedValue = () => <input value={"Front"}/>