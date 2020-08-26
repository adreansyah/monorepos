import React, { useState } from 'react'
import { Button } from '../../Components/Atom'
import { select, number, radios, text } from '@storybook/addon-knobs'
import { Toast } from '../../Components/Molecules'

export default {
    title: 'Molecules/Toast',
    component: Toast,
}

const color = ['success', 'warning', 'error']
const animate = ['fade', 'slide', false]
const placement = ['top', 'topright', 'topleft', 'bottom', 'bottomright', 'bottomleft']
const sameMessage = ['Use Timestamp', 'Use Clear']

//Sharing Knobs
const knobsType = () => select('Type', color, 'success', 'Global Alert')
const knobsText = () => text('Text', 'This is a message', 'Global Alert')
const knobsAnimate = () => select('Animate', animate, 'fade', 'Global Alert')
const knobsTimeout = () =>
    number('Timeout', 5000, { range: true, min: 1000, step: 1000, max: 10000 }, 'Global Alert')
const knobsPlacement = () => select('Placement', placement, 'topright', 'Global Alert')
const knobsSameMessage = () =>
    radios('Same Message Behaviour', sameMessage, 'Use Timestamp', 'Global Alert')

export const UseContainerComponent = () => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [timestamp, setTimestamp] = useState(Math.floor(new Date()))
    const updateMessage = (message, type) => {
        setMessage(message)
        setTimestamp(Math.floor(new Date()))
        setType(type)
    }
    let sampleText = knobsText()
    let sampleType = knobsType()

    return (
        <>
            {knobsSameMessage() === 'Use Timestamp' ? (
                <Toast.Container
                    message={message}
                    type={type}
                    option={{
                        timeout: knobsTimeout(),
                        placement: knobsPlacement(),
                        my: 40,
                        mx: 40,
                        space: 10,
                        animate: knobsAnimate(),
                    }}
                    timestamp={timestamp}
                />
            ) : (
                <Toast.Container
                    message={message}
                    type={type}
                    option={{
                        timeout: knobsTimeout(),
                        placement: knobsPlacement(),
                        my: 40,
                        mx: 40,
                        space: 10,
                        animate: knobsAnimate(),
                    }}
                    onClear={() => setMessage('')}
                />
            )}
            <Button variant="primary-alt" onClick={() => updateMessage(sampleText, sampleType)}>
                Click Me !
            </Button>
        </>
    )
}
export const UseFunctionShow = () => {
    /**
     * Declare Toast() without 
     * function for open or show Toast
     * 1. show(message:String, type:String (one of ['', 'success', 'warning', 'error']), option: Object)
     */
    const T = Toast() // can declare as const { show, component } = Toast()
    let sampleText = knobsText()
    let sampleType = knobsType()
    let sampleTimeout = knobsTimeout()
    let samplePlacement = knobsPlacement()
    let sampleAnimate = knobsAnimate()
    const updateMessage = (message, type) => {
        const option = {
            timeout: sampleTimeout,
            placement: samplePlacement,
            space: 10,
            animate: sampleAnimate,
            /** can use Segment props styled components */
            m: 20,
        }
        /** call function show */
        T.show(message, type, option)
    }
    return (
        <>
            {
                /** Render Toast component */
                T.component
            }
            <Button variant="primary-alt" onClick={() => updateMessage(sampleText, sampleType)}>
                Click Me !
            </Button>
        </>
    )
}
export const UseOthersFunction = () => {
    /**
     * Declare Toast()
     * function for open or show Toast
     * 1. success(message:String, option: Object)
     * 2. warning(message:String, option: Object)
     * 3. error(message:String, option: Object)
     */
    const T = Toast() // can declare as const { success, warning, error, component } = Toast()
    let sampleText = knobsText()
    let sampleType = knobsType()
    let sampleTimeout = knobsTimeout()
    let samplePlacement = knobsPlacement()
    let sampleAnimate = knobsAnimate()
    const updateMessage = (message, type) => {
        const option = {
            timeout: sampleTimeout,
            placement: samplePlacement,
            space: 10,
            animate: sampleAnimate,
            /** can use Segment props styled components */
            m: 30,
        }
        /** call function base on type */
        type === 'success' && T.success(message, option)
        type === 'warning' && T.warning(message, option)
        type === 'error' && T.error(message, option)
    }
    return (
        <>
            {
                /** Render Toast component */
                T.component
            }
            <Button variant="primary-alt" onClick={() => updateMessage(sampleText, sampleType)}>
                Click Me !
            </Button>
        </>
    )
}
