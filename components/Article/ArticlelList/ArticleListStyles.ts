import styled from 'styled-components'
import { constants } from '../../../styles/constants'

export const Wrapper = styled.div`
  padding-right: 20px;
  max-width: 250px;
  min-width: 250px;
  position: sticky;
  top: 0;
  min-height: 80vh;
  ul {
    margin-left: 0;
    padding-left: 0;
    font-size: 18px;
    li {
      list-style-type: none;
      margin-bottom: 18px;
      button {
        background: none;
        border: none;
        text-align: left;
      }
    }
  }
  .Article-list__article-link {
    cursor: pointer;
    padding: 2px;
    color: ${props => props.theme.currentTheme.buttons.color.text.disabled};
    :hover {
      background: ${props => props.theme.currentTheme.buttons.color.background.primary};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .Article-list__article-link_selected {
    text-align: left;
    cursor: default;
    padding: 2px;
    font-weight: bold;
    color: ${props => props.theme.currentTheme.text};
  }
`
