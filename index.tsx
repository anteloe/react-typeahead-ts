import * as React from 'react'

export interface ITypeAheadState{}

export interface ITypeAheadProps<T>{
    options: Twitter.Typeahead.Options;
    data: Twitter.Typeahead.Dataset<T>;
    className?: string;
    placeholder?: string;
    onChange?: (event) => void;
    onSelected: (event) => void;
}

export class TypeAhead<T> extends React.Component<ITypeAheadProps<T>, ITypeAheadState>{

    bindTypeAhead(input: HTMLInputElement){
        let typeahead = jQuery(input).typeahead(this.props.options, this.props.data);
        typeahead.bind('typeahead:selected', this.props.onSelected);
    }

    render(){
        return <input 
                    type='text' 
                    className={this.props.className} 
                    onChange={this.props.onChange} 
                    placeholder={this.props.placeholder} 
                    ref={this.bindTypeAhead.bind(this)} />;
    }
}