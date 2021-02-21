import * as React from 'react';

export interface NavigationProps{
    components: string[];
}
export const Navigation: React.FC<NavigationProps> = (props) => {
    return (
        <ul className="navigation">
          {
            props.components.map( name => {
              return (
                <li key={name}>
                  <a href={`#${name}`}>{name}</a>
                </li>
              )
            })
          }
        </ul>
      )
}