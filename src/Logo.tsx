import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
<path d="M23.7656 86.6719C27.8821 78.3843 30.0163 69.2536 30 60C30.0039 55.5009 31.0166 51.0598 32.9635 47.0037C34.9104 42.9477 37.742 39.3797 41.25 36.5625" stroke="#BEF264" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M60 60C60.0203 75.2518 56.1482 90.2564 48.75 103.594" stroke="#BEF264" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M45 60C45 56.0218 46.5804 52.2064 49.3934 49.3934C52.2064 46.5804 56.0218 45 60 45C63.9782 45 67.7936 46.5804 70.6066 49.3934C73.4196 52.2064 75 56.0218 75 60C75.0309 75.4624 71.6204 90.7379 65.0156 104.719" stroke="#BEF264" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M102.469 86.25C104.148 77.6008 104.996 68.8107 105 60C105 48.0653 100.259 36.6193 91.8198 28.1802C83.3807 19.7411 71.9347 15 60 15C48.0653 15 36.6193 19.7411 28.1802 28.1802C19.7411 36.6193 15 48.0653 15 60C15.0134 65.1114 14.1411 70.1864 12.4219 75" stroke="#BEF264" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.5 75C41.8808 82.8871 39.0169 90.4662 35.0156 97.4531" stroke="#BEF264" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M56.25 30.2344C57.4945 30.0848 58.7466 30.0065 60 30C67.9565 30 75.5871 33.1607 81.2132 38.7868C86.8393 44.4129 90 52.0435 90 60C89.9957 65.0145 89.6826 70.024 89.0625 75" stroke="#BEF264" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M86.2032 90C85.5 92.7656 84.7032 95.5313 83.8125 98.2031" stroke="#BEF264" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}
