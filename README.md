# React Typeahead TypeScript component

## Installation
`npm i react-typeahead-ts --save`

## Usage
The component has not full typeahead support. At this point there is just some basic functionality implemented. More functionality may be added in future.
This example gives you a brief overview on what's actually implemented and how to use the component.

### define types
For every type you want to use in with the TypeAhead Component, you have to create a specific alias like:

```ts
let StringTypeAhead: new() => React.Component<ITypeAheadProps<string>,any> = TypeAhead
```

### initialization & configuration

```tsx
import * as React from 'react'
import {TypeAhead, ITypeAheadProps} from 'react-typeahead-ts'

let StringTypeAhead: new() => React.Component<ITypeAheadProps<string>,any> = TypeAhead

export class SampleForm extends React.Component<any, any>{
    private options: Twitter.Typeahead.Options;
    private data: Twitter.Typeahead.Dataset<string>;

    componentWillMount(){
        this.options = {
            hint: true,
            highlight: false,
            minLength: 1
        }
        this.data = {
            source: (queryObject, result) => result(['ABC', 'DEF', 'GHI'])
        }
    }

    textChanged(event){
        // handle the change event (eg. create an action)
    }

    textSelected(event){
        // handle the selected event (eg. create an action)
    }

    render(){
        return  <form action="youraction">
                    <StringTypeAhead className='form-control'
                                     placeholder='Your text'
                                     data={this.data} 
                                     options={this.options} 
                                     onChange={this.textChanged.bind(this)} 
                                     onSelected={this.textSelected.bind(this)} />
                </form>;
    }
}
```