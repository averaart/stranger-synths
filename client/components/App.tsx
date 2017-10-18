import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { Oscillator, OscillatorProps } from './Oscillator'

export type Source = {type: 'none'} |
                     {type: 'oscillator'} & OscillatorProps

export type ContextProps = { context: AudioContext }
export type ContextState = { source: Source }

export class App extends React.Component<ContextProps, ContextState> {
  constructor(props:ContextProps, context:any) {
    super(props, context)
    this.state = { source: {type: 'none'} }
  }

  switchOscillator(frequency:number) {
    if (this.state.source.type == 'none') {
      let oscSource:Source = { type:'oscillator', initialFrequency: frequency, context: this.props.context }
      this.setState({...this.state, source: oscSource })
    } else {
      this.setState({...this.state, source: {type: 'none' } })
    }
    let oscSource:Source = { type:'oscillator', initialFrequency: frequency, context: this.props.context }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Hello World!</h1>
        <button onClick={() => { this.switchOscillator( 0 )} }>Add</button>
        {
          this.state.source.type == 'oscillator' ?
            <Oscillator context={this.props.context} initialFrequency={this.state.source.initialFrequency} />
          : null
        }
      </div>);
  }
}

export function renderDestination(target_element_id:string):void {
  ReactDOM.render(
    <App context = { new AudioContext() } />,
    document.getElementById(target_element_id)
  )
}