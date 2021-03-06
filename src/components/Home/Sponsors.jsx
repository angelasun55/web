import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonsDiv } from './Styled';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;

  & .headline {
    text-transform: uppercase;
    margin-bottom: 20px;
    font-size: 20px;
  }

  & img {
    height: 32px;
    margin: 10px 15px;
    transition: var(--normalTransition);
  }

  & a {
    background-color: transparent !important;
    padding: 0 !important;
    border-width: 1px !important;
    border-radius: 0 !important;
  }
`;

const Sponsors = ({ strings }) => (
  <StyledDiv>
    <div className="headline">
      {strings.home_sponsored_by}
    </div>
    <div className="images">
      <a href="//dotacoach.org" target="_blank" rel="noopener noreferrer">
        <img src="/assets/images/dotacoach-logo.png" alt="" />
      </a>
      <a href="https://moremmr.com?utm_source=opendota&utm_medium=homepage&utm_campaign=logo" target="_blank" rel="noopener noreferrer">
        <img src="/assets/images/moremmr-logo.png" alt="" />
      </a>
      <a href="http://www.vpgame.com/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/images/vp-logo.png" alt="" />
      </a>
      <a href="https://www.openai.com/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/images/openai-logo.png" alt="" />
      </a>
      <a href="https://www.rivalry.gg/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/images/rivalry-logo.png" alt="" />
      </a>
    </div>
    <ButtonsDiv>
      <FlatButton
        label={
          <span style={{ fontWeight: 300 }}>
            {strings.home_become_sponsor}
          </span>
        }
        href="//carry.opendota.com"
      />
    </ButtonsDiv>
  </StyledDiv>
);

Sponsors.propTypes = {
  strings: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  strings: state.app.strings,
});

export default connect(mapStateToProps)(Sponsors);
