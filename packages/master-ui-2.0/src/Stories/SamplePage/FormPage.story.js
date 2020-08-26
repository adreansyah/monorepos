import React, { useState } from "react";
import {
    Container,
    Segment,
    FormControl,
    Textfield,
    Button,
    Text,
    Col,
    Row,
    DatePicker,
    OptionBox,
    Textarea,
    RadioButton,
    CheckBox,
} from "../../Components/Atom";

export default {
    title: "Sample Page/Form Page",
};

export const Basic = () => {
    /** OptionBox Stuff */
    const listOptions = [
        { value: "option1", label: "Option 1", isFixed: true },
        { value: "option2", label: "Option 2", isDisabled: true },
        { value: "option3", label: "Option 3"},
        { value: "option4", label: "Option 4", isFixed: true },
        { value: "option5", label: "Option 5"},
        { value: "option6", label: "Option 6"},
        { value: "option7", label: "Option 7"},
        { value: "option8", label: "Option 8"},
        { value: "option9", label: "Option 9"},
        { value: "option10", label: "Option 10"},
    ];

    /** DatePicker Stuff */
    const [data, setData] = useState({});
    const onChange = (name, value) => {
        setData({
            ...data,
            [name]: new Date(value),
        });
    };

    /** Radios Stuff */
    const [selectedRadio, setSelectedRadio] = useState("optionOne");
    const optionsRadio = [
        { label: "Option One", value: "optionOne" },
        { label: "Option Two", value: "OptionTwo" },
    ];

    /** CheckBox Stuff */
    const itemsCheckBox = [{ label: "Checked", value: "checked", checked: false }];
    const [selectedCheckBox, setSelectedCheckBox] = useState([]);
    const handleSelectChangeBox = (event) => {
        const value = event.target.value;

        let arr = selectedCheckBox;
        const idx = arr.indexOf(value);
        if (idx >= 0) {
            arr.splice(idx, 1);
        } else if (idx === -1) {
            arr.splice(idx, 0, value);
        }
        setSelectedCheckBox([...arr]);
    };

    return (
        <>
            <Container minHeight={"60vh"} alignItems={"center"} justifyContent={"center"} display={"flex"}>
                <Segment boxShadow bg={"white"} width={650} borderRadius={4}>
                    <Segment px={30} py={16} borderBottom={"1px solid #DCDEE3"}>
                        <Text H28>Form</Text>
                    </Segment>
                    <Segment p={30}>
                        <form id="myForm" autoComplete="false" onSubmit={(e) => e.preventDefault()}>
                            <FormControl label={"Text"} mb={22}>
                                <Textfield
                                    inputProps={{
                                        placeholder: "Input Text",
                                        onChange: (e) => console.log(e.target.value),
                                    }}
                                />
                            </FormControl>
                            <FormControl label={"Email"} mb={22}>
                                <Textfield
                                    inputProps={{
                                        placeholder: "Input Email",
                                        onChange: (e) => console.log(e.target.value),
                                    }}
                                />
                            </FormControl>
                            <FormControl label={"Password"} mb={22}>
                                <Textfield
                                    inputProps={{
                                        placeholder: "Input Password",
                                        type: "password",
                                        onChange: (e) => console.log(e.target.value),
                                    }}
                                />
                            </FormControl>
                            <FormControl label={"Select"} mb={22}>
                                <OptionBox
                                    placeholder={"Choose Option"}
                                    defaultValue={""} 
                                    options={listOptions}
                                />
                            </FormControl>
                            <FormControl label={"Date Picker"} mb={22}>
                                <DatePicker 
                                    placeholderText="Input Date"
                                    selected={data.singleDate}
                                    onChange={(data) => onChange("singleDate", data)}
                                />
                            </FormControl>
                            <FormControl label={"Textarea"} mb={22}>
                                <Textarea
                                    inputProps={{
                                        rows: "6",
                                        placeholder: "Fill the field...",
                                        onChange: (e) => console.log(e.target.value),
                                    }}
                                />
                            </FormControl>
                            <FormControl label={"Radios"} mb={22}>
                                <RadioButton
                                    radioProps={{
                                        onChange: (e) => setSelectedRadio(e.target.value),
                                        name: "optionsRadio",
                                        id: "optionsRadio",
                                    }}
                                    radioItems={optionsRadio}
                                    selected={selectedRadio}
                                />
                            </FormControl>
                            <FormControl label={"Checkbox"}>
                                <CheckBox
                                    checkProps={{
                                        onChange: (e) => handleSelectChangeBox(e),
                                        name: "check",
                                    }}
                                    checkItems={itemsCheckBox}
                                    selected={selectedCheckBox}
                                />
                            </FormControl>
                        </form>
                    </Segment>
                    <Segment px={30} py={16} justifyContent={"flex-end"}>
                        <Button 
                            variant="primary" 
                            size="medium" 
                            type={"submit"} 
                            onChange={() => {}}
                        >
                            SUBMIT
                        </Button>
                    </Segment>
                </Segment>
            </Container>
        </>
    );
};


export const LeftLabel = () => {
    /** OptionBox Stuff */
    const listOptions = [
        { value: "option1", label: "Option 1", isFixed: true },
        { value: "option2", label: "Option 2", isDisabled: true },
        { value: "option3", label: "Option 3"},
        { value: "option4", label: "Option 4", isFixed: true },
        { value: "option5", label: "Option 5"},
        { value: "option6", label: "Option 6"},
        { value: "option7", label: "Option 7"},
        { value: "option8", label: "Option 8"},
        { value: "option9", label: "Option 9"},
        { value: "option10", label: "Option 10"},
    ];

    /** DatePicker Stuff */
    const [data, setData] = useState({});
    const onChangeDate = (name, value) => {
        setData({
            ...data,
            [name]: new Date(value),
        });
    };

    /** Radios Stuff */
    const [selectedRadio, setSelectedRadio] = useState("optionOne");
    const optionsRadio = [
        { label: "Option One", value: "optionOne" },
        { label: "Option Two", value: "OptionTwo" },
    ];

    /** CheckBox Stuff */
    const itemsCheckBox = [{ label: "Checked", value: "checked", checked: false }];
    const [selectedCheckBox, setSelectedCheckBox] = useState([]);
    const handleSelectChangeBox = (event) => {
        const value = event.target.value;

        let arr = selectedCheckBox;
        const idx = arr.indexOf(value);
        if (idx >= 0) {
            arr.splice(idx, 1);
        } else if (idx === -1) {
            arr.splice(idx, 0, value);
        }
        setSelectedCheckBox([...arr]);
    };

    return (
        <>
            <Container minHeight={"60vh"} alignItems={"center"} justifyContent={"center"} display={"flex"}>
                <Segment boxShadow bg={"white"} width={650} borderRadius={4}>
                    <Segment px={30} py={16} borderBottom={"1px solid #DCDEE3"}>
                        <Text H28>Form</Text>
                    </Segment>
                    <Segment p={30}>
                        <form id="myForm" autoComplete="false" onSubmit={(e) => e.preventDefault()}>
                            <Row mb={22}>
                                <Col wide={4} py={8}>
                                    <Text fontWeight={500}>Text</Text>
                                </Col>
                                <Col wide={8}>
                                    <FormControl>
                                        <Textfield
                                            inputProps={{
                                                placeholder:"Input Text",
                                                onChange: (e) => console.log(e.target.value),
                                            }}
                                        />
                                    </FormControl>
                                </Col>
                            </Row>
                            <Row mb={22}>
                                <Col wide={4} py={8}>
                                    <Text fontWeight={500}>Email</Text>
                                </Col>
                                <Col wide={8}>
                                    <FormControl>
                                        <Textfield
                                            inputProps={{
                                                placeholder:"Input Email",
                                                onChange: (e) => console.log(e.target.value),
                                            }}
                                        />
                                    </FormControl>
                                </Col>
                            </Row>
                            <Row mb={22}>
                                <Col wide={4} py={8}>
                                    <Text fontWeight={500}>Password</Text>
                                </Col>
                                <Col wide={8}>
                                    <FormControl>
                                        <Textfield
                                            inputProps={{
                                                type:"password",
                                                placeholder:"Input Password",
                                                onChange: (e) => console.log(e.target.value),
                                            }}
                                        />
                                    </FormControl>
                                </Col>
                            </Row>
                            <Row mb={22}>
                                <Col wide={4} py={8}>
                                    <Text fontWeight={500}>Select</Text>
                                </Col>
                                <Col wide={8}>
                                    <FormControl>
                                        <OptionBox 
                                            defaultValue={""} 
                                            options={listOptions} 
                                            placeholder={"Choose Option"}
                                        />
                                    </FormControl>
                                </Col>
                            </Row>
                            <Row mb={22}>
                                <Col wide={4} py={8}>
                                    <Text fontWeight={500}>Date Picker</Text>
                                </Col>
                                <Col wide={8}>
                                    <FormControl>
                                        <DatePicker
                                            placeholderText="Input Date"
                                            selected={data.singleDate} 
                                            onChange={(data) => onChangeDate("singleDate", data)} 
                                        />
                                    </FormControl>
                                </Col>
                            </Row>
                            <Row mb={22}>
                                <Col wide={4} py={8}>
                                    <Text fontWeight={500}>Textarea</Text>
                                </Col>
                                <Col wide={8}>
                                    <FormControl>
                                        <Textarea
                                            inputProps={{
                                                rows: "6",
                                                placeholder: "Fill the field...",
                                                onChange: (e) => console.log(e.target.value),
                                            }}
                                        />
                                    </FormControl>
                                </Col>
                            </Row>
                            <Row mb={22}>
                                <Col wide={4} py={6}>
                                    <Text fontWeight={500}>Radios</Text>
                                </Col>
                                <Col wide={8}>
                                    <FormControl>
                                        <RadioButton
                                            radioProps={{
                                                onChange: (e) => setSelectedRadio(e.target.value),
                                                name: "optionsRadio",
                                                id: "optionsRadio",
                                            }}
                                            radioItems={optionsRadio}
                                            selected={selectedRadio}
                                        />
                                    </FormControl>
                                </Col>
                            </Row>
                            <Row mb={22}>
                                <Col wide={4} py={8}>
                                    <Text fontWeight={500}>Checkbox</Text>
                                </Col>
                                <Col wide={8}>
                                    <FormControl>
                                        <CheckBox
                                            checkProps={{
                                                onChange: (e) => handleSelectChangeBox(e),
                                                name: "check",
                                            }}
                                            checkItems={itemsCheckBox}
                                            selected={selectedCheckBox}
                                        />
                                    </FormControl>
                                </Col>
                            </Row>
                        </form>
                    </Segment>
                    <Segment px={30} py={16} justifyContent={"flex-end"}>
                        <Button 
                            variant="primary" 
                            size="medium" 
                            type={"submit"} 
                            onChange={() => {}}
                        >
                            SUBMIT
                        </Button>
                    </Segment>
                </Segment>
            </Container>
        </>
    );
};
