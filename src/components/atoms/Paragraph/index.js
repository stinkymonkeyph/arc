import { PropTypes } from 'react'
import styled from 'styled-components'

export const fontFamily = ({ theme }) => theme.fonts.primary

export const color = ({ theme, reverse }) =>
  theme[reverse ? 'reverseColors' : 'colors'].grayscale[0]

const Paragraph = styled.p`
  font-family: ${fontFamily};
  color: ${color};
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`

Paragraph.propTypes = {
  reverse: PropTypes.bool
}

Paragraph.defaultProps = {
  theme: {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      grayscale: { 0: '#222' }
    },
    reverseColors: {
      grayscale: { 0: '#fff' }
    }
  }
}

export default Paragraph