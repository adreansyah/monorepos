import React, { useState } from "react";
import { text, radios, boolean } from "@storybook/addon-knobs";
import {
  CheckBox,
  DatePicker,
  FormControl,
  OptionBox,
  RadioButton,
  Textfield,
  Segment,
  Textarea
} from "../../Components/Atom";

const Label = () => text("Label", "Label", "Textfield");
const HelpText = () => text("Help Text", "Help Text", "Textfield");

const behaviors = ["normal", "success", "error", "autofill"];
const FormBehavior = () => radios("Behavior", behaviors, "normal", "Textfield");

const modelInput = ["default", "line"];
const ModelInput = () =>
  radios("Model Input", modelInput, "default", "Textfield");

const modelForm = ["default", "static"];
const ModelForm = () => radios("Model Form", modelForm, "default", "Textfield");

const OptionFormBehavior = () => radios("Behavior", ["normal", "success", "error"], "normal", "OptionBox");
const OptionLabel = () => text("Label", "Label", "OptionBox");
const OptionHelpText = () => text("Help Text", "Help Text", "OptionBox");
const knobsPlaceholder = () => text("placeholder", "select...", "OptionBox");
const knobsSearchable = () => boolean("isSearchable", false, "OptionBox");
const knobsClearable = () => boolean("isClearable", false, "OptionBox");
const knobsLoading = () => boolean("isLoading", false, "OptionBox");
const knobsMulti = () => boolean("isMulti", false, "OptionBox");
const knobsDisabled = () => boolean("isDisabled", false, "OptionBox");

export default {
  title: "Molecules/Form",
  component: {
    FormControl,
    OptionBox,
    RadioButton,
    Textfield
  }
};

// Form Textfield
export const FormTextfield = () => {
  return (
    <FormControl
      label={Label()}
      helptext={HelpText()}
      status={FormBehavior()}
      model={ModelForm()}
    >
      <Textfield
        status={FormBehavior()}
        inputProps={{
          onChange: e => console.log(e.target.value),
          "data-validation": "require,email"
        }}
        model={ModelInput()}
      />
    </FormControl>
  );
};

// Form Textarea
export const FormTextarea = () => {
  return (
    <FormControl
      label={Label()}
      helptext={HelpText()}
      status={FormBehavior()}
      model={ModelForm()}
    >
      <Textarea
        status={FormBehavior()}
        inputProps={{
          onChange: e => console.log(e.target.value),
          "data-validation": "require,email"
        }}
        model={ModelInput()}
      />
    </FormControl>
  );
};


// Form RadioButton
export const FormRadioButton = () => {
  const items = [
    { label: "Pria", value: "001", checked: false },
    { label: "Wanita", value: "002", checked: false }
  ];

  const [selected, setSelected] = useState("");
  const handleSelectChange = event => {
    const value = event.target.value;
    setSelected(value);
  };
  return (
    <FormControl label={Label()} helptext={HelpText()} status={FormBehavior()}>
      <RadioButton
        radioProps={{
          onChange: e => handleSelectChange(e),
          name: "radio",
          selected: selected
        }}
        radioItems={items}
      />
    </FormControl>
  );
};

// Form OptionBox
export const FormOptionBox = () => {
  const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

  return (
    <>
    <Segment height={200}>  
      <FormControl label={OptionLabel()} helptext={OptionHelpText()} status={OptionFormBehavior()}>
        <OptionBox
          status={OptionFormBehavior()}
          defaultValue={colourOptions[0]}
          isClearable={knobsClearable()}
          isSearchable={knobsSearchable()}
          options={colourOptions}
          isDisabled={knobsDisabled()}
          isLoading={knobsLoading()}
          isMulti={knobsMulti()}
          placeholder={knobsPlaceholder()}
        />
      </FormControl>
    </Segment>
    </>
  );
};

// Form CheckBox
export const FormCheckBox = () => {
  const items = [{ label: "Motor", value: "202", checked: false }];
  const [selected, setSelected] = useState([]);
  const handleSelectChange = event => {
    const value = event.target.value;

    let arr = selected;
    const idx = arr.indexOf(value);
    if (idx >= 0) {
      arr.splice(idx, 1);
    } else if (idx === -1) {
      arr.splice(idx, 0, value);
    }
    setSelected([...arr]);
  };
  return (
    <FormControl label={Label()} helptext={HelpText()} status={FormBehavior()}>
      <CheckBox
        checkProps={{
          onChange: e => handleSelectChange(e),
          name: "check"
        }}
        checkItems={items}
        selected={selected}
      />
    </FormControl>
  );
};

// Form DatePicker
export const FormDatePicker = () => {
  const [data, setData] = useState({});

  const onChange = (name, value) => {
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <div style={{height: "400px"}}>
      <FormControl label={Label()} helptext={HelpText()} status={FormBehavior()}>
      <DatePicker
        status={FormBehavior()}
        dateFormat="iii, dd MMM yyyy"
        placeholderText="Masukkan tanggal"
        selected={data.singleDate}
        shouldCloseOnSelect={false}
        onChange={data => onChange("singleDate", data)}
        onChangeRaw={event => console.log(event)}
      />
    </FormControl>
    </div>
    
  );
};
