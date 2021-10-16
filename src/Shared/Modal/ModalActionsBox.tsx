import React, {Component, Fragment} from "react";

interface Props {
    actions?: (() => any)[]
}

export class ModalActionsBox extends Component<Props> {
    render() {
        return <div className={'flex items-center justify-center py-4'}>
            {
                this.props.actions?.map((action, index) => <Fragment key={index}>
                    {action()}
                </Fragment>)
            }
        </div>
    }
}