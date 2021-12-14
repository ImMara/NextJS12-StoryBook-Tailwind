import ButtonOutline from '../../../components/tailwind/ButtonOutline'

export default {
    title:"tailwind/button-outline",
    component: ButtonOutline
}
const Template = (args) => <ButtonOutline {...args} />

export const primary = {
    args:{
        title: "primary",
        var:"primary"
    }
}