import React, { useState } from "react";
import { TraySelect } from "../../../Components/Molecules";
import { FormControl, Textfield, Segment, Icon } from "../../../Components/Atom";
// import Icon, from "../../Atom/Icon";
import { select } from "@storybook/addon-knobs";
import mdx from './TraySelect.mdx'

const backdrop = [true, false, "static"];
const trayType = () => select("Backdrop", backdrop, "true", "Tray");

export default {
  title: "Molecules/TraySelect",
  component: { TraySelect },
  parameters: {
    docs: {
      page: mdx
    }
  }
};


export const Basic = () => {
  const [discount, setDiscount] = useState("%");
  const [isModalShow, setModal] = useState(false);
  const [isPicker, setPicker] = useState({
    valueGroups: {
      discount: '%',
    },
    optionGroups: {
      discount: ['%', 'Rp'],
    }
  });


  const toggleModalClose = () => {
    setModal(!isModalShow);
  }

  const handleEnsureClick = () => {
    toggleModalClose();
    setDiscount(isPicker.valueGroups.discount);
  }

  const handleChange = (name, value) => {
    setPicker(props => {
      return {
        ...props,
        valueGroups: {
          ...props.valueGroups,
          [name]: value
        }
      }
    });
  }


  return (
    <Segment style={{ width: "200px", height: "400px", overflowY: "hidden" }}>
      <Segment onClick={() => toggleModalClose()}>
        <FormControl label="" model="static">
          <Textfield
            model="line"
            inputProps={{
              readonly: true,
              placeholder: '',
              value: discount,
            }}
            right={<Icon
              style={{ position: "absolute", right: 0 }}
              name={"chevron-down"} size={16} fillColor="black50" />}
          />
        </FormControl>
      </Segment>
      <TraySelect
        isOpen={isModalShow}
        overlayClick={() => toggleModalClose()}
        backdrop={trayType()}
        ensureText={"SIMPAN"}
        ensureClick={() => handleEnsureClick()}
        optionGroups={isPicker.optionGroups}
        valueGroups={isPicker.valueGroups}
        onChange={handleChange}>
      </TraySelect>
    </Segment>
  );
};


