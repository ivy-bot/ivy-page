import React from "react";

export default class Icon extends React.Component {

    render() {
        const width = this.props.width
        const height = this.props.height

        const rotate = this.props.rotate || 0

        const fillCode = this.props.color ? `fill="${this.props.color}"` : ''
        const styleCode = `style="width: ${width}; height: ${height}"`
        const html = this.props.src.replace(/<svg/, `<svg ${fillCode} ${styleCode}`)

        const restProps = Object.assign({}, this.props)
        delete restProps.width
        delete restProps.height
        delete restProps.color
        delete restProps.src
        delete restProps.className

        return (
            <i
                {...restProps}
                className={this.props.className}
                style={{
                    transform: `rotate(${rotate}deg)`,
                    WebkitTransform: `rotate(${rotate}deg)`,
                    display: 'flex',
                    width: width,
                    height: height,
                }}
                dangerouslySetInnerHTML={{__html: html}}
            />
        )
    }
}
