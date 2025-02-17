import React, { HTMLProps, useCallback } from 'react'
import { ExternalLink } from 'react-feather'

export function ExternalLinkIcon({
  target = '_blank',
  href,
  rel = 'noopener noreferrer',
  ...rest
}: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> & {
  href: string
}) {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      // don't prevent default, don't redirect if it's a new tab
      if (target === '_blank' || event.ctrlKey || event.metaKey) {
      } else {
        event.preventDefault()
      }
    },
    [href, target]
  )
  return (
    <a
      className="flex items-center justify-center hover:opacity-70"
      target={target}
      rel={rel}
      href={href}
      onClick={handleClick}
      {...rest}
    >
      <ExternalLink className="h-4 w-[18px] ml-2.5" />
    </a>
  )
}
