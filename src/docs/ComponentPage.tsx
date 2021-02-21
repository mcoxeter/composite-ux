import * as React from 'react';
import { Example } from './Example';
import { Props } from './Props';
import styles from './ComponentPage.module.scss'

export interface Component {
    name: string;
    description: string;
    props?: any;
    examples: any[];
}

export interface ComponentPageProps {
    component: Component;
}

export const ComponentPage: React.FC<ComponentPageProps> = ({component}) => {
    const {name, description, examples, props} = component;
    return  (
        <div className={styles['component']}>
          <h2>{name}</h2>
          <p>{description}</p>
    
          <h3>Example{examples.length > 1 && "s"}</h3>
          {
            examples.length > 0 ?
            examples.map( example => <Example key={example.name} example={example} componentName={name} /> ) :
            "No examples exist."
          }
    
          <h3>Props</h3>
          {
            props ?
            <Props props={props} /> :
            "This component accepts no props."
          }
        </div>
      )
}