import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ScrollToTopButton = styled.button`
  position: fixed;
  right: 5%;
  bottom: 10%;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid black;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: black;
    color: white;
  }

  ...props.style;
`;

const FixedMobileScrollToTopButton = ScrollToTopButton.extend`
  position: fixed;
  right: 5%;
  bottom: 5%;
  padding: 10px;
  z-index: 10;
  border-radius: 50%;
  ...props.style;
`;

const AbsoluteMobileScrollToTopButton = ScrollToTopButton.extend`
  position: absolute;
  right: 5%;
  padding: 10px;
  z-index: 10;
  border-radius: 50%;
  ...props.style;
`;

class ScrollTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
      isFixed: true,
      isFlying: false,
      showScrollToTop: null,
      maxDistance: 0
    };

    this.checkWindowSize = this.checkWindowSize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
    this.getScrollTop = this.getScrollTop.bind(this);
    this.setScrollTop = this.setScrollTop.bind(this);
  }

  componentDidMount() {
    this.checkWindowSize();
    this.checkForScrollToTop();
    this.checkForFixedPosition();
    window.addEventListener("resize", this.checkWindowSize);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkWindowSize);
    window.addEventListener("scroll", this.handleScroll);
  }

  checkWindowSize() {
    this.setState({ isMobile: window.innerWidth < this.props.breakpoint });
  }

  checkForScrollToTop() {
    if (
      document.body.scrollTop > this.props.distance ||
      document.documentElement.scrollTop > this.props.distance
    ) {
      this.setState({
        showScrollToTop: true
      });
    } else {
      this.setState({
        showScrollToTop: false,
        isFlying: false
      });
    }
  }

  checkForFixedPosition() {
    const maxDistance = document.documentElement.scrollHeight - window.innerHeight - this.props.bottomOffset;
    if (
      document.body.scrollTop > maxDistance ||
      document.documentElement.scrollTop > maxDistance
    ) {
      this.setState({ isFixed: false, maxDistance: (document.documentElement.scrollHeight - this.props.bottomOffset - 150) });
    } else {
      this.setState({ isFixed: true, maxDistance: (document.documentElement.scrollHeight - this.props.bottomOffset - 150) });
    }
  }

  handleScroll() {
    this.checkForScrollToTop();
    this.checkForFixedPosition();
  }

  scrollUp() {
    const { performance, requestAnimationFrame } = window;

    const { speed, target } = this.props;
    if (
      speed <= 0 ||
      typeof performance === "undefined" ||
      typeof requestAnimationFrame === "undefined"
    ) {
      return this.setScrollTop(target);
    }
    const start = performance.now();
    const initScrollTop = this.getScrollTop();
    const pxsToScrollBy = initScrollTop - target;

    const that = this;
    requestAnimationFrame(step);

    function step(timestamp) {
      const delta = timestamp - start;
      const progress = Math.min(delta / speed, 1);
      that.setScrollTop(initScrollTop - Math.round(progress * pxsToScrollBy));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  }

  getScrollTop() {
    return (
      document.body.scrollTop ||
      ((document.documentElement && document.documentElement.scrollTop) || 0)
    );
  }

  setScrollTop(value) {
    document.body.scrollTop = value;
    if (document.documentElement) {
      document.documentElement.scrollTop = value;
    }
  }

  renderIcon() {
    return <div
      className="scroll-top-icon"
      onClick={() => this.setState({ isFlying: true })}
      style={{
        boxShadow: `0px 0px 0px rgba(0,0,0,0.5)`,
        borderRadius: `3px`,
        width: '60px',
        padding: `10px 15px`
      }}
    ><img 
    src={this.state.isFlying ? this.props.litSrc : this.props.hoveringSrc} 
    alt="scroll to top button"
    /></div>
  }

  render() {
    let className = "react-scrolltop-button";
    if (this.props.className) {
      className = `${className} ${this.props.className}`;
    }

    if (this.state.isMobile) {
      className = `${className} react-scrolltop-button-mobile`;
    }

    // Clone this.props and then delete Component specific props so we can
    // spread the rest into the button.
    let { ...rest } = this.props;
    delete rest.text;
    delete rest.style;
    delete rest.className;
    delete rest.breakpoint;
    delete rest.distance;

    return this.state.showScrollToTop && this.state.isMobile ? (
      this.state.isFixed ?
        <FixedMobileScrollToTopButton
          style={this.props.style}
          {...rest}
          className={className}
          onClick={this.scrollUp}
        >
          {this.renderIcon()}
        </FixedMobileScrollToTopButton> :
        <AbsoluteMobileScrollToTopButton
          style={{
            top: this.state.maxDistance,
            ...this.props.style
          }}
          {...rest}
          className={className}
          onClick={this.scrollUp}
        >
          {this.renderIcon()}
        </AbsoluteMobileScrollToTopButton>
    ) : (
      this.state.showScrollToTop && (
        <ScrollToTopButton
          style={this.props.style}
          {...rest}
          className={className}
          onClick={this.scrollUp}
        >
          {this.props.text}
        </ScrollToTopButton>
      )
    );
  }
}

ScrollTop.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  distance: PropTypes.number,
  bottomOffset: PropTypes.number,
  breakpoint: PropTypes.number,
  icon: PropTypes.element,
  speed: PropTypes.number,
  target: PropTypes.number
};

ScrollTop.defaultProps = {
  text: "back to top",
  distance: 50,
  breakpoint: 991,
  speed: 250,
  target: 0
};

export default ScrollTop;
