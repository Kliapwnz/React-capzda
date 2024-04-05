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
   const [parentValue, setParentValue] = useState<string | undefined>(undefined)

   const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      setParentValue(e.currentTarget.value)
   }

   return <select value={parentValue} onChange={onChangeHandler}>
      <option>none</option>
      <option value={"1"}>Minks</option>
      <option value={"2"}>Basel</option>
      <option value={"3"}>Manchester</option>
   </select>

}


export const ControlledInputWithFixedValue = () => <input value={"Front"}/>