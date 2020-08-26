import React, { useState } from "react";
import { Segment } from "../../../Components/Atom";
import { Tabs } from "../../../Components/Molecules";
import mdx from './Tabs.mdx'

export default {
  title: "Molecules/Tabs/Long Tabs",
  component: Tabs,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const _0LongTabs = () => {
  const tabList1 = [
    {
      uri: "unpaid1",
      orderStatus: "UNPAID",
      name: "Belum Dibayar"
    },
    {
      uri: "new1",
      orderStatus: "DEFAULT_NEW_ORDER",
      name: "Pesanan Baru"
    },
    {
      uri: "onprocess1",
      orderStatus: "ON_PROCESS",
      name: "Perlu Dikirim"
    },
    {
      uri: "sent1",
      orderStatus: "SENT",
      name: "Dalam Pengiriman"
    },
    {
      uri: "delivered1",
      orderStatus: "DELIVERED",
      name: "Diterima"
    },
    {
      uri: "purchased1",
      orderStatus: "PURCHASED_CONFIRM",
      name: "Terkonfirmasi"
    }
  ];
  const [active, setActive] = useState(tabList1[0].uri);
  return (
    <Segment border="1px solid black" p={8}>
      <Tabs
        active={active}
        onChange={active => setActive(active)}
        longTabs
        underlineSize={2}
      >
        {tabList1.map(item => {
          const count = `(99+)`;
          return (
            <div key={item.uri}>
              {item.name} {count}
            </div>
          );
        })}
      </Tabs>
      <h2>Content</h2>
      <p>content is: {active}</p>
    </Segment>
  );
};

export const NoGutter = () => {
  const tabList2 = [
    {
      uri: "unpaid2",
      orderStatus: "UNPAID",
      name: "Belum Dibayar"
    },
    {
      uri: "new2",
      orderStatus: "DEFAULT_NEW_ORDER",
      name: "Pesanan Baru"
    },
    {
      uri: "onprocess2",
      orderStatus: "ON_PROCESS",
      name: "Perlu Dikirim"
    },
    {
      uri: "sent2",
      orderStatus: "SENT",
      name: "Dalam Pengiriman"
    },
    {
      uri: "delivered2",
      orderStatus: "DELIVERED",
      name: "Diterima"
    },
    {
      uri: "purchased2",
      orderStatus: "PURCHASED_CONFIRM",
      name: "Terkonfirmasi"
    }
  ];
  const [active, setActive] = useState(tabList2[0].uri);
  return (
    <Segment border="1px solid black" p={8}>
      <Tabs
        active={active}
        onChange={active => setActive(active)}
        longTabs
        noGutter
      >
        {tabList2.map(item => {
          const count = `(99+)`;
          return (
            <div key={item.uri}>
              {item.name} {count}
            </div>
          );
        })}
      </Tabs>
      <h2>Content</h2>
      <p>content is: {active}</p>
    </Segment>
  );
};

export const TabsPadding = () => {
  const tabList3 = [
    {
      uri: "unpaid3",
      orderStatus: "UNPAID",
      name: "Belum Dibayar"
    },
    {
      uri: "new3",
      orderStatus: "DEFAULT_NEW_ORDER",
      name: "Pesanan Baru"
    },
    {
      uri: "onprocess3",
      orderStatus: "ON_PROCESS",
      name: "Perlu Dikirim"
    },
    {
      uri: "sent3",
      orderStatus: "SENT",
      name: "Dalam Pengiriman"
    },
    {
      uri: "delivered3",
      orderStatus: "DELIVERED",
      name: "Diterima"
    },
    {
      uri: "purchased3",
      orderStatus: "PURCHASED_CONFIRM",
      name: "Terkonfirmasi"
    }
  ];
  const [active, setActive] = useState(tabList3[0].uri);
  return (
    <Segment border="1px solid black" p={8}>
      <Tabs
        active={active}
        onChange={active => setActive(active)}
        longTabs
        tabsPadding="8"
      >
        {tabList3.map(item => {
          const count = `(99+)`;
          return (
            <div key={item.uri}>
              {item.name} {count}
            </div>
          );
        })}
      </Tabs>
      <h2>Content</h2>
      <p>content is: {active}</p>
    </Segment>
  );
};

export const TabsMargin = () => {
  const tabList4 = [
    {
      uri: "unpaid4",
      orderStatus: "UNPAID",
      name: "Belum Dibayar"
    },
    {
      uri: "new4",
      orderStatus: "DEFAULT_NEW_ORDER",
      name: "Pesanan Baru"
    },
    {
      uri: "onprocess4",
      orderStatus: "ON_PROCESS",
      name: "Perlu Dikirim"
    },
    {
      uri: "sent4",
      orderStatus: "SENT",
      name: "Dalam Pengiriman"
    },
    {
      uri: "delivered4",
      orderStatus: "DELIVERED",
      name: "Diterima"
    },
    {
      uri: "purchased4",
      orderStatus: "PURCHASED_CONFIRM",
      name: "Terkonfirmasi"
    }
  ];
  const [active, setActive] = useState(tabList4[0].uri);
  return (
    <Segment border="1px solid black" p={8}>
      <Tabs
        active={active}
        onChange={active => setActive(active)}
        longTabs
        tabsMargin="8"
        noGutter
      >
        {tabList4.map(item => {
          const count = `(99+)`;
          return (
            <div key={item.uri}>
              {item.name} {count}
            </div>
          );
        })}
      </Tabs>
      <h2>Content</h2>
      <p>content is: {active}</p>
    </Segment>
  );
};
