declare module 'react-rangeslider' {

  import * as React from 'react';

  export class Slider extends React.Component<SliderProps, any> { }

  export interface SliderProps {
    min?: number,
    max?: number,
    step?: number,
    value?: number,
    orientation?: string,
    reverse?: boolean,
    tooltip?: boolean,
    labels?: object,
    handleLabel?: string,
    format?: (value:number) => string, 
    onChangeStart?: (e:object) => void,
    onChange?: (value:number, e:object) => void,
    onChangeComplete?: (e:object) => void
  }
  export const WORKAROUND = 0;
}
