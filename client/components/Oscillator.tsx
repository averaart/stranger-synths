import * as React from "react"
import * as ReactDOM from "react-dom"
// import * as Immutable from "immutable"

export type OscillatorProps = { frequency:number, context:AudioContext }
export type OscillatorState = { oscillator:OscillatorNode }

export class Oscillator extends React.Component<OscillatorProps, OscillatorState> {
  constructor(props:OscillatorProps, context:any) {
    super(props, context)
    this.state = {oscillator: this.props.context.createOscillator() }
  }

  componentWillMount() {
    this.state.oscillator.frequency.value = this.props.frequency
    this.state.oscillator.type = 'sine'
    this.state.oscillator.connect(this.props.context.destination)
    this.state.oscillator.start()
  }

  componentWillUnmount() {
    this.state.oscillator.stop()
    this.state.oscillator.disconnect()
  }

  render() {
    return (
      <div>
        { this.props.frequency }
      </div>
    )
  }
}