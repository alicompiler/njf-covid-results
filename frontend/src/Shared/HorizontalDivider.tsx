import React from "react";

interface Props {
    size?: "sm" | "md" | "lg"
}

export class HorizontalDivider extends React.Component<Props> {
    render() {
        const size = this.props.size ?? "md";
        const widthBasedOnSize = {
            'sm': 'w-4',
            'md': 'w-6',
            'lg': 'w-8'
        };
        const widthClass = widthBasedOnSize[size];
        return <div className={widthClass}/>
    }
}