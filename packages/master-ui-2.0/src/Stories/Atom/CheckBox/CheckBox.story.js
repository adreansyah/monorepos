import React, { useState } from "react";
import { CheckBox, Segment, Text } from "../../../Components/Atom";
import mdx from './Checkbox.mdx';

export default {
  title: "Atom/Check Box",
  component: CheckBox,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Single = () => {
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState(['apple', 'mango']);
  const [selectedAgree, setSelectedAgree] = useState(false);

  const selecItems = (items, value) => {
    let arr = items;
    const idx = items.indexOf(value);
    if (idx >= 0) {
      items.splice(idx, 1);
    } else if (idx === -1) {
      items.splice(idx, 0, value);
    }
    return arr;
  }

  const handleSelectColor = event => {
    const value = event.target.value;
    const result = selecItems(selectedColor, value);
    setSelectedColor([...result]);
  };

  const handleSelectFruit = event => {
    const value = event.target.value;
    const result = selecItems(selectedFruit, value);
    setSelectedFruit([...result]);
  };

  return (
    <>
      <Segment>
        <Text H14>Normal</Text>
        <CheckBox
          checkProps={{
            onChange: e => handleSelectColor(e),
            name: "color",
            id: "colorBlue"
          }}
          checkItems={[
            { label: "Blue", value: "blue" }
          ]}
          selected={selectedColor}
        />
        <CheckBox
          checkProps={{
            onChange: e => handleSelectColor(e),
            name: "color",
            id: "colorRed"
          }}
          checkItems={[
            { label: "Red", value: "red" }
          ]}
          selected={selectedColor}
        />
      </Segment>

      <Segment mt={16}>
        <Text H14>Selected from data</Text>
        <CheckBox
          checkProps={{
            onChange: e => handleSelectFruit(e),
            name: "fruit",
            id: "fruitApple"
          }}
          checkItems={[
            { label: "Apple", value: "apple" }
          ]}
          selected={selectedFruit}
        />
        <CheckBox
          checkProps={{
            onChange: e => handleSelectFruit(e),
            name: "fruit",
            id: "fruitMango"
          }}
          checkItems={[
            { label: "Mango", value: "mango" }
          ]}
          selected={selectedFruit}
        />
      </Segment>

      <Segment mt={16}>
        <Text H14>Selected from props</Text>
        <CheckBox
          checkProps={{
            onChange: e => setSelectedAgree(e.target.checked),
            name: "aggrement",
            id: "aggrement",
            checked: selectedAgree
          }}
          checkItems={[
            { label: "I Agree", value: "agree" }
          ]}
        />
      </Segment>

      <Segment mt={16}>
        <Text H14>Disabled from data</Text>
        <CheckBox
          checkProps={{
            onChange: e => handleSelectColor(e),
            name: "color",
            id: "colorBlack"
          }}
          checkItems={[
            { label: "Black", value: "black", disabled: true }
          ]}
          selected={selectedColor}
        />
        <CheckBox
          checkProps={{
            onChange: e => handleSelectColor(e),
            name: "color",
            id: "colorOrange",
          }}
          checkItems={[
            { label: "White", value: "white", disabled: true }
          ]}
          selected={['white']}
        />
      </Segment>

      <Segment mt={16}>
        <Text H14>Disabled from props</Text>
        <CheckBox
          checkProps={{
            onChange: e => handleSelectColor(e),
            name: "color",
            id: "colorGreen",
            disabled: true
          }}
          checkItems={[
            { label: "Green", value: "green" }
          ]}
          selected={selectedColor}
        />
        <CheckBox
          checkProps={{
            onChange: e => handleSelectColor(e),
            name: "color",
            id: "colorOrange",
            disabled: true
          }}
          checkItems={[
            { label: "Orange", value: "orange" }
          ]}
          selected={['orange']}
        />
      </Segment>
    </>
  );
};

export const Bulk = () => {
  const [selectedHobby, setSelectedHobby] = useState([]);
  const [selectedColor, setSelectedColor] = useState(['red', 'blue']);
  const [selectedFruit, setSelectedFruit] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState([]);

  const hobbies = [
    { label: "Fishing", value: "fishing" },
    { label: "Golf", value: "golf" }
  ];

  const colors = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" }
  ];

  const fruits = [
    { label: "Apple", value: "apple", disabled: true },
    { label: "Mango", value: "mango", disabled: true }
  ];

  const vehicles = [
    { label: "Car", value: "car" },
    { label: "Truck", value: "truck" }
  ];

  const selecItems = (items, value) => {
    let arr = items;
    const idx = items.indexOf(value);
    if (idx >= 0) {
      items.splice(idx, 1);
    } else if (idx === -1) {
      items.splice(idx, 0, value);
    }
    return arr;
  }

  const handleSelectHobby = event => {
    const value = event.target.value;
    const result = selecItems(selectedHobby, value);
    setSelectedHobby([...result]);
  };

  const handleSelectColor = event => {
    const value = event.target.value;
    const result = selecItems(selectedColor, value);
    setSelectedColor([...result]);
  };

  const handleSelectFruit = event => {
    const value = event.target.value;
    const result = selecItems(selectedFruit, value);
    setSelectedFruit([...result]);
  };

  const handleSelectVehicle = event => {
    const value = event.target.value;
    const result = selecItems(selectedVehicle, value);
    setSelectedVehicle([...result]);
  };

  return (
    <>
      <Segment>
        <Text H14>Normal</Text>
        <CheckBox
          checkProps={{
            onChange: e => handleSelectHobby(e),
            name: "hobby",
            id: "hobby"
          }}
          checkItems={hobbies}
          selected={selectedHobby}
        />
      </Segment>

      <Segment mt={16}>
        <Text H14>Selected from data</Text>
        <CheckBox
          checkProps={{
            onChange: e => handleSelectColor(e),
            name: "color",
            id: "color"
          }}
          checkItems={colors}
          selected={selectedColor}
        />
      </Segment>

      <Segment mt={16}>
        <Text H14>Disabled from data</Text>
        <CheckBox
          checkProps={{
            onChange: e => handleSelectFruit(e),
            name: "fruit",
            id: "fruit"
          }}
          checkItems={fruits}
          selected={['mango']}
        />
      </Segment>

      <Segment mt={16}>
        <Text H14>Disabled from props</Text>
        <CheckBox
          checkProps={{
            onChange: e => handleSelectVehicle(e),
            name: "vehicle",
            id: "vehicle",
            disabled: true
          }}
          checkItems={vehicles}
          selected={['truck']}
        />
      </Segment>
    </>
  );
};