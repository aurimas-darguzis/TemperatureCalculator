import React from 'react'

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <div>
                <fieldset>
                    <legend>Enter temeprature in {scaleNames[scale]}</legend>
                    <input value={temperature} onChange={this.handleChange} />
                </fieldset>
            </div>
        )
    }
}

export default TemperatureInput

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}