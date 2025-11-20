import React from 'react'
import ReactDOMServer from 'react-dom/server'

export function formatMoney(
  moneyValue: number,
  numberFormatOptions?: Intl.NumberFormatOptions,
): string {
  const formattedAmount = Intl.NumberFormat('en-GB', {
    notation: 'standard',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...numberFormatOptions,
  }).format(moneyValue)

  return `£${formattedAmount}`
}

export function getTooltipClassName(text: React.ReactElement | string): string {
  const length = getNodeText(text).length

  switch (true) {
    case length > 900:
      return 'tooltip-xl'
    case length > 200:
      return 'tooltip-lg'
    case length > 20:
      return 'tooltip-md'
    default:
      return ''
  }
}

// Get text content of React element
export function getNodeText(
  node: React.ReactElement | string | number,
): string {
  const nodeHtml = ReactDOMServer.renderToString(node)

  const wrapperElement = document.createElement('div')
  wrapperElement.innerHTML = nodeHtml

  return wrapperElement.textContent || ''
}
