import React, { useState, useRef } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const AccordionHead = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
  min-width: 204px;

  &:hover {
    cursor: pointer;
  }
`

const Arrow = styled.div`
  width: 0;
  height: 0;
  margin: 0px 4px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 6px solid #70727D;
  transition: transform 200ms ease;

  &.arrow--show {
    border-bottom: 6px solid #000;
  }

  &.arrow--top {
    transform: rotate(0deg)
  }

  &.arrow--bottom {
    transform: rotate(180deg)
  }

  &.arrow--left {
    transform: rotate(270deg)
  }

  &.arrow--right {
    transform: rotate(90deg)
  }
`

const AccordionContent = styled.div`
  transition: all 300ms ease;
  overflow: hidden;
  max-height: 0px;
  margin: 0px;
  padding-left: 16px;
`

const Accordion = ({children, label}) => {
  const [show, setShow] = useState(false);
  const refContent = useRef()

  const handleClick = () => {
    setShow(!show)
    if (refContent.current.style.maxHeight) {
      refContent.current.style.transitionDuration = '200ms'
      refContent.current.style.maxHeight = null
    } else {
      refContent.current.style.transitionDuration = '1000ms'
      refContent.current.style.maxHeight = refContent.current.scrollHeight + 100 + 'vh'
    }
  }

  return (
    <>
      <AccordionHead onClick={handleClick}>
        <div className={`accordion__label ${show ? 'u-fw-bold' : ''}`}>{label}</div>
        <Arrow className={`arrow--${show ? 'bottom' : 'right'} ${show ? 'arrow--show' : ''}`} />
      </AccordionHead>
      <AccordionContent ref={refContent}>
        {children}
      </AccordionContent>
    </>
  )
}

//Props Validation
Accordion.propTypes = {
  label: PropTypes.string
};

export default Accordion;