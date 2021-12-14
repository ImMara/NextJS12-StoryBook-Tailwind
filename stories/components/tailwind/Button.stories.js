import Button from "../../../components/tailwind/Button"

export default {
    title:"tailwind/button",
    component:Button
}
const Template = (args) => <Button {...args} />

export const primary = {
    args:{
        title:"Primary",
        var:"warning"
    }
}
export const secondary = {
    args:{
        title:"Secondary",
        var:"secondary"
    }
}
export const warning = {
    args:{
        title:"Warning",
        var:"warning"
    }
}
export const danger = {
    args:{
        title:"Danger",
        var:'danger'
    }
}