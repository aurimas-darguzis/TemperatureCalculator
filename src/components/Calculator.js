import React from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {temperature: '', scale: ''}
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        return (
            <div>
                <TemperatureInput />
                <TemperatureInput />
                <BoilingVerdict />
            </div>
        )
    }
}

export default Calculator