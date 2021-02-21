import * as React from 'react';
import componentData from '../config/componentData';
import { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { ComponentPage } from './ComponentPage';

export const Docs: React.FC<{}> = () => {
    const [route, setRoute] = useState(window.location.hash.substr(1));
    useEffect( () => {
        window.addEventListener('hashchange', () => {
            setRoute( x => window.location.hash.substr(1) );
        });
     });

     const component = route 
        ? componentData.filter( component => component.name === route)[0]
        : componentData[0];        
    return (      
        <div>
            <Navigation components={componentData.map(component => component.name)} />
            <ComponentPage component={component} />
      </div>
      );
}