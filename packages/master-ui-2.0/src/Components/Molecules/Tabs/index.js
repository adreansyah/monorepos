import React from "react";
import styled, { css, withTheme } from "styled-components";
import Segment from "../../Atom/Segment";

const TabsUnderline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1px solid ${props => props.underlineColor};
  height: ${props => props.underlineSize}px;
  background-color: ${props => props.underlineColor};
`;

const TabsDotWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const TabsDot = styled.div`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  margin: 0 4px;
  display: inline-block;

  &:nth-child(1) {
    background-color: ${props => props.theme.color.orange30};
  }
  &:nth-child(2) {
    background-color: ${props => props.theme.color.red30};
  }
  &:nth-child(3) {
    background-color: ${props => props.theme.color.green30};
  }
`;

const TabsTitle = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.color.black40};
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.black50};
    text-decoration: none;
  }
`;

const TabsItem = styled.li`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;

  ${props =>
    props.tabsPadding
      ? props.tabsPadding.length > 0
        ? css`
            padding: 0 ${props.tabsPadding}px;
          `
        : css`
            padding: 0 16px;
          `
      : css`
          padding: 0 16px;
        `};
  ${props =>
    props.tabsMargin
      ? props.tabsMargin.length > 0
        ? css`
            padding: 0px;
            margin: 0 ${props.tabsMargin}px;
          `
        : css`
            padding: 0px;
            margin: 0 16px;
          `
      : ``};

  ${props =>
    props.noGutter &&
    css`
      &:first-child {
        padding-left: 0px;
        margin-left: 0px;
      }
      &:last-child {
        padding-right: 0px;
        margin-right: 0px;
      }
    `}

  ${props =>
    (props.responsive || props.longTabs) &&
    css`
      flex: 1 0 auto;
    `}

  &.active {
    position: relative;
    ${TabsTitle} {
      color: ${props => props.theme.color.black70};
    }
  }
  &:hover {
    cursor: pointer;
  }
  i {
    margin-right: 16px;
  }
`;

const TabsItemList = styled.ul`
  position: relative;
  display: flex;
  padding-left: 0px;
  flex-direction: row;
  height: 32px;
`;

const TabsWrapper = styled(Segment)`
  display: flex;
  position: relative;
  width: 100%;
  border-bottom: ${props =>
    props.dots ? `none` : `1px solid ${props.theme.color.black30}`};
`;

const TabsScroller = styled.div`
  display: block;
  position: relative;
  overflow-x: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${props =>
    props.longTabs &&
    css`
      overflow-x: scroll;
      width: 100%;
    `}

  ${props =>
    props.responsive &&
    css`
      width: 100%;
    `}
`;

const transitionTime = 200;
const transitionStyle = `left ${transitionTime}ms, right ${transitionTime}ms`;

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      root: "",
      sizes: {}
    };
    this.els = {};
  }

  async asyncCall() {
    let size = null;
    size = await this.getSizes();
    if (size !== null) this.getCenter();
  }

  componentDidMount() {
    this.asyncCall();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.asyncCall();
    }
  }

  getSizes() {
    const rootBounds = this.root.getBoundingClientRect();
    const sizes = {};

    Object.keys(this.els).forEach(key => {
      const el = this.els[key];
      const id = el.id;
      const bounds = el.getBoundingClientRect();
      const left = bounds.left - rootBounds.left;
      const right = rootBounds.right - bounds.right;
      sizes[key] = { left, right, id };
    });
    this.setState({ sizes });

    return sizes;
  }

  getUnderlineStyle() {
    if (
      this.props.active == null ||
      Object.keys(this.state.sizes).length === 0
    ) {
      return { left: "0", right: "100%" };
    }

    const size = this.state.sizes[this.props.active];

    if (size) {
      return {
        left: `${size.left}px`,
        right: `${size.right}px`,
        transition: transitionStyle
      };
    } else {
      return {
        border: "none",
        left: `0 px`,
        right: `0 px`,
        transition: transitionStyle
      };
    }
  }

  getCenter = () => {
    if (this.props.longTabs) {
      const tabId = this.props.active;
      if (this.state.sizes[tabId]) {
        const choosen = document.getElementById(this.state.sizes[tabId].id);
        choosen.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
      }
    }
  };

  scrollHandler = e => {
    return e;
  };

  render() {
    const { tabsMargin, tabsPadding, noGutter, underlineSize, underlineColor, theme } = this.props;
    const spacing = { tabsMargin, tabsPadding, noGutter };

    const colorProbe = () => {
      if (underlineColor && underlineColor.length > 0){
        return Object.keys(theme.color).indexOf(underlineColor) !== -1
        ? theme.color[underlineColor]
        : underlineColor;
      } else {
        return theme.color.primary
      }
    };

    return (
      <TabsWrapper dots={this.props.dots} {...this.props}>
        <TabsScroller
          responsive={this.props.responsive}
          longTabs={this.props.longTabs}
        >
          <TabsItemList
            ref={el => (this.root = el)}
            dots={this.props.dots}
            longTabs={this.props.longTabs}
          >
            {React.Children.map(this.props.children, (child, i) => {
              if (child) {
                let className = ``;
                if (child.key === this.props.active) {
                  className = `active`;
                }
                return (
                  <TabsItem
                    id={child.key}
                    dots={this.props.dots}
                    responsive={this.props.responsive}
                    longTabs={this.props.longTabs}
                    className={className}
                    onClick={() => {
                      this.props.onChange(child.key);
                    }}
                    ref={el => (this.els[child.key] = el)}
                    {...spacing}
                  >
                    <TabsTitle>{child.props.children}</TabsTitle>
                  </TabsItem>
                );
              }
            })}
          </TabsItemList>
          {this.props.dots ? (
            <TabsDotWrapper style={this.getUnderlineStyle()}>
              <TabsDot />
              <TabsDot />
              <TabsDot />
            </TabsDotWrapper>
          ) : (
            <TabsUnderline
              style={this.getUnderlineStyle()}
              underlineSize={underlineSize}
              underlineColor={colorProbe}
            />
          )}
        </TabsScroller>
      </TabsWrapper>
    );
  }
}

//Default Props
Tabs.defaultProps = {
  underlineSize: 4,
  underlineColor: "primary"
};

export default withTheme(Tabs);
