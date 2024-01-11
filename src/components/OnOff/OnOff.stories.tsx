import {OnOff} from "./OnOff";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: "OnOff",
    component: OnOff,
}
export const OnMode = () => <OnOff value={true} onClick={x=>x}/>
export const OffMode = () => <OnOff value={false} onClick={x=>x}/>
export const ModeChanging = () => {
    const [value,setValue]= useState(false)
    return <OnOff value={value} onClick={setValue}/>
}
