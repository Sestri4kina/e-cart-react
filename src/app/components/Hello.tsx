import * as React from "react";

export interface HelloProps { 
    bundler: string; 
    framework: string; 
    language: string;
}

export const Hello = (props: HelloProps) => <h1>This is {props.bundler} and {props.framework} with {props.language}!</h1>;
