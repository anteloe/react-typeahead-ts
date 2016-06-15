# React Typeahead TypeScript component

## Installation
`npm i react-typeahead-ts --save`

## Usage
This is a basic example how you would use typeahead in your tsx component.

```typescript
import * as React from 'react'
import {TypeAhead} from 'react-typeahead-ts'

interface IMyComponentProps{
    msg: string;
}

interface IMyComponentState{
    data: (d) => void;
    selected: string;
}

export class MyComponent extends React.Component<IMyComponentState, IMyComponentProps>{

    dataChanged(data:string){
        // do your stuff here
        // eg. ActionCreator.dataChanged(data);
    }

    dataSelected(data:string){
        // do your stuff here
        // eg. ActionCreator.dataSelected(data);
    }

    render(){
        return <TypeAhead className='someclass' placeholder='hello' onChange={this.dataChanged.bind(this)} onSelected={this.dataChanged.bind(this)}/>
    }
}
```