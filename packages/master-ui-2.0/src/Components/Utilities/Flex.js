import React from 'react';

const Flex = () => {
    return (
        <div>
            <h1 className="title">Flex</h1>
            <h2>Enable flex behaviors</h2>
            <p className="u-tx-info">Apply <span className="u-tx-primary u-fw-regular">display</span> utilities to create a flexbox container and 
                transform <span className="u-fw-bold">direct children elements</span> into flex items. 
                Flex containers and items are able to be modified further
                 with additional flex properties.</p>
            <h2 className="u-my-24">Display Flex</h2>
            <div className="u-ds-flex u-p-12 u-bd u-my-24">I'm a flexbox container!</div>
            <code className="u-m-0">
            &lt;p className="u-ds-flex"&gt;Display Flex&lt;/p&gt;<br/>
            </code>
            <h2 className="u-my-24">Display Inline Flex</h2>
            <div className="u-ds-inline-flex u-p-12 u-bd u-tx-black u-my-24">I'm a flexbox container!</div><br/>
            <code className="u-m-0">
            &lt;p className="u-ds-inline-flex"&gt;Display Inline Flex&lt;/p&gt;<br/>
            </code>
            <h1>Notation</h1>
            <h2>Direction</h2>
            <p className="u-tx-info">Set the direction of flex items in a flex container 
                with direction utilities. In most cases you can omit 
                the horizontal class here as the browser default is <span className="u-tx-primary u-fw-regular">row</span>.
                 However, you may encounter situations where you needed 
                 to explicitly set this value (like responsive layouts).
                <br/>
                Use <span className="u-tx-primary u-fw-regular">.u-fx-row</span>to set a horizontal direction 
                (the browser default), or <span className="u-tx-primary u-fw-regular">.u-fx-row-reverse</span> to start 
                the horizontal direction from the opposite side.</p>
                <h3 className="u-my-24">Flex row</h3>
                <div className="u-fx-row u-mb-24">
                    <div className="u-p-12 u-bd">Flex item 1</div>
                    <div className="u-p-12 u-bd">Flex item 2</div>
                    <div className="u-p-12 u-bd">Flex item 3</div>
                </div>
                <h3 className="u-my-12">Flex column</h3>
                <div className="u-fx-column u-mb-12">
                    <div className="u-p-12 u-bd">Flex item 1</div>
                    <div className="u-p-12 u-bd">Flex item 2</div>
                    <div className="u-p-12 u-bd">Flex item 3</div>
                </div>
            <p className="u-my-24 u-tx-info">Responsive variations also exist for <span className="u-tx-primary u-fw-regular">flex-direction</span></p>
            <ul className="list-page">
                <li><span className="u-tx-primary">.u-fx-row</span> </li>
                <li><span className="u-tx-primary">.u-fx-row-reverse</span> </li>
                <li><span className="u-tx-primary ">.u-fx-column</span> </li>
                <li><span className="u-tx-primary">.u-fx-column-reverse</span> </li>
            </ul>
            <h2 className="u-my-24">Justify content</h2>
            <p className="u-tx-info">Responsive variations also exist for <span className="u-tx-primary u-fw-regular">justify-content</span>.</p>
            <ul className="list-page">
                <li><span className="u-tx-primary">.u-js-start</span> </li>
                <li><span className="u-tx-primary">.u-js-end</span> </li>
                <li><span className="u-tx-primary">.u-js-center</span> </li>
                <li><span className="u-tx-primary">.u-js-between</span> </li>
                <li><span className="u-tx-primary">.u-js-around</span> </li>
            </ul>
            <h2 className="u-mt-24">Align items</h2>
            <p className="u-my-24 u-tx-info">Responsive variations also exist for <span className="u-tx-primary u-fw-regular">align-items</span>.</p>
            <ul className="list-page">
                <li><span className="u-tx-primary">.u-al-items-start</span> </li>
                <li><span className="u-tx-primary">.u-al-items-end</span> </li>
                <li><span className="u-tx-primary">.u-al-items-center</span> </li>
                <li><span className="u-tx-primary">.u-al-items-baseline</span> </li>
                <li><span className="u-tx-primary">.u-al-items-stretch</span> </li>
            </ul>
            <h2 className="u-mt-24">Flex Wrap</h2>
            <p className="u-my-24 u-tx-info">Responsive variations also exist for <span className="u-tx-primary u-fw-regular">Flex Wrap</span>.</p>
            <ul className="list-page">
                <li><span className="u-tx-primary">.u-fx-wrap</span> </li>
                <li><span className="u-tx-primary">.u-fx-nowrap</span> </li>
                <li><span className="u-tx-primary">.u-fx-wrap-reverse</span> </li>
            </ul>
            <h2 className="u-mt-24">Align Content</h2>
            <p className="u-my-24 u-tx-info">Responsive variations also exist for <span className="u-tx-primary u-fw-regular">Align Content</span>.</p>
            <ul className="list-page">
                <li><span className="u-tx-primary">.u-al-content-start</span> </li>
                <li><span className="u-tx-primary">.u-al-content-end</span> </li>
                <li><span className="u-tx-primary">.u-al-content-center</span> </li>
                <li><span className="u-tx-primary">.u-al-content-between</span> </li>
                <li><span className="u-tx-primary">.u-al-content-around</span> </li>
                <li><span className="u-tx-primary">.u-al-content-stretch</span> </li>
            </ul>
            <h2 className="u-mt-24">Align Self</h2>
            <p className="u-my-24 u-tx-info">Responsive variations also exist for <span className="u-tx-primary u-fw-regular">Align Self</span>.</p>
            <ul className="list-page">
                <li><span className="u-tx-primary">.u-al-self-auto</span> </li>
                <li><span className="u-tx-primary">.u-al-self-start</span> </li>
                <li><span className="u-tx-primary">.u-al-self-end</span> </li>
                <li><span className="u-tx-primary">.u-al-self-center</span> </li>
                <li><span className="u-tx-primary">.u-al-self-baseline</span> </li>
                <li><span className="u-tx-primary">.u-al-self-stretch</span> </li>
            </ul>
            <h2 className="u-mt-24">Align Fill</h2>
            <p className="u-my-24 u-tx-info">Responsive variations also exist for <span className="u-tx-primary u-fw-regular">Align Fill</span>.</p>
            <ul className="list-page">
                <li><span className="u-tx-primary">.u-fx-fill</span> </li>
            </ul>
            <h2 className="u-mt-24">Flex</h2>
            <p className="u-my-24 u-tx-info">Responsive variations also exist for <span className="u-tx-primary u-fw-regular">Flex</span>.</p>
            <ul className="list-page">
                <li><span className="u-tx-primary">.u-fx-grow-0</span> </li>
                <li><span className="u-tx-primary">.u-fx-grow-1</span> </li>
                <li><span className="u-tx-primary">.u-fx-shrink-0</span> </li>
                <li><span className="u-tx-primary">.u-fx-shrink-1</span> </li>
            </ul>
        </div>
    );
};

export default Flex;