import * as React from "react";
import {Element} from "react-scroll";
 
 const Step = ({children, name}: any) => (
     <Element name={name}>
         <div className="step">
             {children}
         </div>
     </Element>
);
 
export default Step;
