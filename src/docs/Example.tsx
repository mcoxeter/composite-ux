import * as React from 'react';
import { useState } from 'react';
import { CodeExample } from './CodeExample';

export interface ExampleProps{
    componentName: string;
    example: any;
}
export const Example: React.FC<ExampleProps> = (props) => {
    const {code, description, name} = props.example;
    const [showCode, setShowCode] = useState(false);

    const toggleCode = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowCode( x => !x);
      };

    const ExampleComponent = require(`./examples/${props.componentName}/${name}`).default;
    return (
        <div className="example">
          {description && <h4>{description}</h4> }
  
          <ExampleComponent />
  
          <p>
            <a href="#" onClick={toggleCode}>
              {showCode ? "Hide" : "Show"} Code
            </a>
          </p>
  
          {showCode && <CodeExample>{code}</CodeExample>}
        </div>
      );
}