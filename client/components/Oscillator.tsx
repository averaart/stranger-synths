import * as React from "react"
import * as ReactDOM from "react-dom"
import { Slider, SliderProps, WORKAROUND } from "react-rangeslider"

export type OscillatorProps = { initialFrequency:number, context:AudioContext }
export type OscillatorState = { oscillator:OscillatorNode, frequency:number, workaround:number }

export class Oscillator extends React.Component<OscillatorProps, OscillatorState> {
  constructor(props:OscillatorProps, context:any) {
    super(props, context)
    this.state = {oscillator: this.props.context.createOscillator(), frequency: props.initialFrequency, workaround: WORKAROUND }
  }

  componentWillMount() {
    this.state.oscillator.frequency.value = this.state.frequency
    this.state.oscillator.type = 'sine'
    this.state.oscillator.connect(this.props.context.destination)
    this.state.oscillator.start()
  }

  componentWillUnmount() {
    this.state.oscillator.stop()
    this.state.oscillator.disconnect()
  }

  changeFrequency(value:number, e:object) {
    this.state.oscillator.frequency.value = value
  }

  render() {
    return (
      <div>
        { this.state.frequency }
        <Slider value={this.state.frequency} min={20} max={12000} />
      </div>
    )
  }
}
