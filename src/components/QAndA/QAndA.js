import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const QAndA = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>How does React work?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p
              style={{ color: "white", textAlign: "left", paddingLeft: "10px" }}
            >
              React reads these objects and uses them to create HTML elements on
              the virtual DOM, after which it gets synced with the real DOM. So
              we'll have trees of objects on the virtual DOM and trees of
              objects on the real DOM. React automatically updates the
              associated DOM element when we change data on a React element.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What are the differences between props and state?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p
              style={{ color: "white", textAlign: "left", paddingLeft: "10px" }}
            >
              Props are used to pass data from one component to another. The
              state is a local data storage that is local to the component only
              and cannot be passed to other components. State can be passed
              through components with props.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              what are the advantages using useeffect hook except fetching data?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p
              style={{ color: "white", textAlign: "left", paddingLeft: "10px" }}
            >
              Using useEffect is probably the best part of React Hooks. It helps
              reduce the clutter of the component lifecycle methods and, most
              importantly, it helps separate different logic that can appear in
              the lifecycle methods
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default QAndA;
