import * as React from 'react';

export interface CodeExampleProps {}
export const CodeExample: React.FC<CodeExampleProps> = (props) => {
    return (
        <pre>
          <code>
            {props.children}
          </code>
        </pre>
    );
}