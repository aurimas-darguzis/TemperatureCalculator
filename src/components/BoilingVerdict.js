import React from 'react'

class BoilingVerdict extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.celsius >= 100 ?  
                    <p>The water would boild</p> :
                    <p>The water would not boild</p>
                }
            </div>
        )
    }
}

export default BoilingVerdict
