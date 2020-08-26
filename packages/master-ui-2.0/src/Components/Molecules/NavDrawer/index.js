import React, { useState, useEffect, useCallback } from "react";
import { Wrapper, LeftContent, RightContent, List, ListItem } from "./styled";
import Icon from "../../Atom/Icon";
import Text from "../../Atom/Text";

const NavDrawerMap = (obj, itemLevel, itemClick, expandClick) => {
  const { children, key, active, open } = obj;
  return (
      <React.Fragment key={key}>
          {children.length > 0 ? (
              <>
                  <ListItem
                      parent="true"
                      data-key={key}
                      level={itemLevel}
                      onClick={expandClick}
                      open={open}
                      active={active ? "active" : ""}
                      to={"#"}
                  >
                      <LeftContent>
                          {obj.icon.length !== 0 && (
                              <Icon name={obj.icon} size="large" fillColor={"black50"} />
                          )}
                      </LeftContent>
                      <Text H12 lineHeight="24px">
                          {obj.label}
                      </Text>
                      <RightContent data-key={key}>
                          <Icon
                              name={obj.open ? "chevron-up" : "chevron-down"}
                              size={12}
                              fillColor={"black70"}
                          />
                      </RightContent>
                  </ListItem>
                  <List isOpen={obj.open}>
                      {children.map(item => {
                          const level = itemLevel + 1;
                          return NavDrawerMap(item, level, itemClick, expandClick);
                      })}
                  </List>
              </>
          ) : (
                  <ListItem
                      data-key={key}
                      level={itemLevel}
                      onClick={itemClick}
                      active={active ? "active" : ""}
                      to={obj.link}
                  >
                      <LeftContent>
                          {obj.icon.length !== 0 && (
                              <Icon
                                  name={obj.icon}
                                  size="large"
                                  fillColor={active ? "white" : "black50"}
                              />
                          )}
                      </LeftContent>
                      <Text H12 lineHeight="24px" className="nav-drawer-item__text">
                          {obj.label}
                      </Text>
                  </ListItem>
              )}
      </React.Fragment>
  );
};

const NavDrawer = props => {
  const { tree, activeNav, onClickNav } = props;
  const [list, setList] = useState([]);
  const checkParent = useCallback((list, parent) => {
      list.map(item => {
          if (item.key === parent) {
              item.active = true;
              item.open = true;
              item.parent && checkParent(tree, item.parent)
          } else {
              item.children && item.children.length && checkParent(item.children, parent)
          }
          return item;
      });
  }, [tree]);

  const ItemClick = useCallback((list, key, action) => {
      list.map(item => {
          if (item.key === key) {
              item.active = true;
              checkParent(tree, item.parent);
              action === 'click' && onClickNav && onClickNav(item);
              return list;
          } else {
              item.active = false;
              return ItemClick(item.children, key, action);
          }
      });
      setList([...list])
  }, [checkParent, onClickNav, tree]);

  const ExpandClick = useCallback((list, key) => {
      list.map(item => {
          if (item.key === key) {
              item.open = !item.open;
              return list;
          } else {
              return ExpandClick(item.children, key);
          }
      });
      setList([...list])
  }, []);

  const handleItemClick = useCallback(event => {
      const key = event.target.dataset.key;
      ItemClick(tree, key, 'click');
  }, [tree, ItemClick])

  const handleExpandClick = useCallback(event => {
      const key = event.target.dataset.key;
      ExpandClick(tree, key)
  }, [tree, ExpandClick])

  useEffect(() => {
      ItemClick(tree, activeNav, 'default');
  }, [ItemClick, activeNav, tree])

  return (
      <Wrapper className={props.className}>
          <List isOpen={true}>
              {
                  list.length !== 0 && list.map(item => {
                      const level = 0;
                      return NavDrawerMap(
                          item,
                          level,
                          e => handleItemClick(e),
                          e => handleExpandClick(e)
                      );
                  })
              }
          </List>
      </Wrapper>
  )
}

export default NavDrawer;
