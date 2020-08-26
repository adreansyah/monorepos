import { css } from "styled-components"

const H42 = css`
  font-size: ${({theme}) => theme.textType.H42.fontSize};
  font-weight: ${({theme}) => theme.textType.H42.fontWeight};
  line-height: ${({theme}) => theme.textType.H42.lineHeight};
`
const H28 = css`
  font-size: ${({theme}) => theme.textType.H28.fontSize};
  font-weight: ${({theme}) => theme.textType.H28.fontWeight};
  line-height: ${({theme}) => theme.textType.H28.lineHeight};
`
const H24 = css`
  font-size: ${({theme}) => theme.textType.H24.fontSize};
  font-weight: ${({theme}) => theme.textType.H24.fontWeight};
  line-height: ${({theme}) => theme.textType.H24.lineHeight};
`
const H20 = css`
  font-size: ${({theme}) => theme.textType.H20.fontSize};
  font-weight: ${({theme}) => theme.textType.H20.fontWeight};
  line-height: ${({theme}) => theme.textType.H20.lineHeight};
`
const H16 = css`
  font-size: ${({theme}) => theme.textType.H16.fontSize};
  font-weight: ${({theme}) => theme.textType.H16.fontWeight};
  line-height: ${({theme}) => theme.textType.H16.lineHeight};
`
const H14 = css`
  font-size: ${({theme}) => theme.textType.H14.fontSize};
  font-weight: ${({theme}) => theme.textType.H14.fontWeight};
  line-height: ${({theme}) => theme.textType.H14.lineHeight};
`
const H12 = css`
  font-size: ${({theme}) => theme.textType.H12.fontSize};
  font-weight: ${({theme}) => theme.textType.H12.fontWeight};
  line-height: ${({theme}) => theme.textType.H12.lineHeight};
`
const H10 = css`
  font-size: ${({theme}) => theme.textType.H10.fontSize};
  font-weight: ${({theme}) => theme.textType.H10.fontWeight};
  line-height: ${({theme}) => theme.textType.H10.lineHeight};
`
const B14 = css`
  font-size: ${({theme}) => theme.textType.B14.fontSize};
  font-weight: ${({theme}) => theme.textType.B14.fontWeight};
  line-height: ${({theme}) => theme.textType.B14.lineHeight};
`
const B12 = css`
  font-size: ${({theme}) => theme.textType.B12.fontSize};
  font-weight: ${({theme}) => theme.textType.B12.fontWeight};
  line-height: ${({theme}) => theme.textType.B12.lineHeight};
`
const B10 = css`
  font-size: ${({theme}) => theme.textType.B10.fontSize};
  font-weight: ${({theme}) => theme.textType.B10.fontWeight};
  line-height: ${({theme}) => theme.textType.B10.lineHeight};
`
const B10B = css`
  font-size: ${({theme}) => theme.textType.B10B.fontSize};
  font-weight: ${({theme}) => theme.textType.B10B.fontWeight};
  line-height: ${({theme}) => theme.textType.B10B.lineHeight};
`
const P14 = css`
  font-size: ${({theme}) => theme.textType.P14.fontSize};
  font-weight: ${({theme}) => theme.textType.P14.fontWeight};
  line-height: ${({theme}) => theme.textType.P14.lineHeight};
`
const P12 = css`
  font-size: ${({theme}) => theme.textType.P12.fontSize};
  font-weight: ${({theme}) => theme.textType.P12.fontWeight};
  line-height: ${({theme}) => theme.textType.P12.lineHeight};
`

const TextType = { H42, H28, H24, H20, H16, H14, H12, H10, B14, B12, B10, B10B, P14, P12 };
export default TextType;