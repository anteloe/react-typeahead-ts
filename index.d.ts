import * as React from 'react';
export interface ITypeAheadState {
}
export interface ITypeAheadProps<T> {
    options: Twitter.Typeahead.Options;
    data: Twitter.Typeahead.Dataset<T>;
    className?: string;
    placeholder?: string;
    onChange?: (event) => void;
    onSelected: (event) => void;
}
export declare class TypeAhead<T> extends React.Component<ITypeAheadProps<T>, ITypeAheadState> {
    bindTypeAhead(input: HTMLInputElement): void;
    render(): JSX.Element;
}
