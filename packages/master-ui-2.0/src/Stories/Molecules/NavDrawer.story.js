import React, { useState, useEffect } from "react";
import { NavDrawer } from "../../Components/Molecules";
import { ButtonLink, Segment, Text } from "../../Components/Atom";
import { select } from "@storybook/addon-knobs";

export default {
  title: "Molecules/Navigation Drawer",
  component: NavDrawer
};
const knobsClick = () => select('Using Click', [true, false], true, 'Nav Drawer')

export const Basic = () => {
  const [path, setPath] = useState(null);
  const [NavDrawerTree] = useState([
    {
      key: "home",
      icon: "home",
      label: "Home",
      link: "/home",
      children: []
    },
    {
      key: "handphone",
      icon: "handphone",
      label: "Handphone",
      link: "/handphone",
      children: [
        {
          key: "android",
          icon: "",
          label: "Android",
          link: "/android",
          parent: "handphone",
          children: []
        },
        {
          key: "blackberry",
          icon: "",
          label: "Blackberry",
          link: "/blackberry",
          parent: "handphone",
          children: [
            {
              key: "blackberry-1",
              icon: "",
              label: "Blackberry 1",
              link: "/blackberry-1",
              parent: "blackberry",
              children: []
            },
            {
              key: "blackberry-2",
              icon: "",
              label: "Blackberry 2",
              link: "/blackberry-2",
              parent: "blackberry",
              children: []
            }
          ]
        },
        {
          key: "ios",
          icon: "",
          label: "IOS",
          link: "/ios",
          parent: "handphone",
          children: []
        }
      ]
    },
    {
      key: "powerbank",
      icon: "exchange",
      label: "Power Bank",
      link: "/Power-Bank",
      children: [
        {
          key: "powerbank-portable",
          icon: "",
          label: "Portable Power Bank",
          link: "/portable-power-bank",
          parent: "powerbank",
          children: []
        },
        {
          key: "powerbank-powercase",
          icon: "",
          label: "Power Case",
          link: "/power-case",
          parent: "powerbank",
          children: []
        },
        {
          key: "powerbank-solar",
          icon: "",
          label: "Solar Power Bank",
          link: "/solar-power-bank",
          parent: "powerbank",
          children: []
        }
      ]
    },
    {
      key: "security",
      icon: "locked",
      label: "Security",
      link: "/Security",
      children: []
    }
  ]);

  useEffect(() => {
    setPath('home')
  }, [])

  const handleClick = (data) => {
    alert('Link :' + data.link)
  }

  return (
    <>
      <Segment mb={30}>
        {knobsClick() ?
          <NavDrawer
            tree={NavDrawerTree}
            activeNav={path}
            onClickNav={(data) => handleClick(data)}
            className={"nav-drawer"}
          />
          :
          <NavDrawer
            tree={NavDrawerTree}
            activeNav={path}
            className={"nav-drawer"}
          />
        }
      </Segment>
      <Segment>
        <Text H14>Open drawer based on state : {path}</Text>
        <ul>
          <li><ButtonLink variant="secondary" onClick={() => setPath('home')}>Home</ButtonLink></li>
          <li><ButtonLink variant="secondary" onClick={() => setPath('android')}>Handphone -> Android</ButtonLink></li>
          <li><ButtonLink variant="secondary" onClick={() => setPath('blackberry-1')}>Handphone -> Blckberry -> Blackberry 1</ButtonLink></li>
          <li><ButtonLink variant="secondary" onClick={() => setPath('blackberry-2')}>Handphone -> Blckberry -> Blackberry 2</ButtonLink></li>
          <li><ButtonLink variant="secondary" onClick={() => setPath('ios')}>Handphone -> IOS</ButtonLink></li>
          <li><ButtonLink variant="secondary" onClick={() => setPath('powerbank-portable')}>Power Bank -> Portable Power Bank</ButtonLink></li>
          <li><ButtonLink variant="secondary" onClick={() => setPath('powerbank-powercase')}>Power Bank -> Power Case</ButtonLink></li>
          <li><ButtonLink variant="secondary" onClick={() => setPath('powerbank-solar')}>Power Bank -> Solar Power Bank</ButtonLink></li>
          <li><ButtonLink variant="secondary" onClick={() => setPath('security')}>Security</ButtonLink></li>
        </ul>
      </Segment>
    </>
  );
};
