import {ChangeEvent, useState} from "react";

export default {
   title: "input"
};

export const ControlledInput = () => {
   const [parentValue, setParentValue] = useState("")

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setParentValue(e.currentTarget.value)
   }

   return <input value={parentValue} onChange={onChangeHandler}/>
}
export const ControlledCheckbox = () => {
   const [parentValue, setParentValue] = useState(true)

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setParentValue(e.currentTarget.checked)
   }

   return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
}
export const ControlledSelect = () => {

}


export const ControlledInputWithFixedValue = () => <input value={"Front"}/>