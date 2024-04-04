import {OnOff} from "./OnOff";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
   title: "OnOff",
   component: OnOff,
}
const callBack = action("clicked")

export const OnMode = () => <OnOff value={true} onClick={callBack}/>
export const OffMode = () => <OnOff value={false} onClick={callBack}/>
export const ModeChanging = () => {
   const [value, setValue] = useState<boolean>(false)
   return <OnOff value={value} onClick={setValue}/>
}
