import React, { useEffect, useRef } from 'react'

interface TabsProps {
  children: React.ReactNode
}

export function Tabs({ children }: TabsProps) {
  const labelsRef = useRef<HTMLUListElement>(null)
  const tabsRef = useRef<HTMLUListElement>(null)
  const handleLabelsClick = ({ target }: Event) => {
    if (
      target &&
      target instanceof HTMLLIElement &&
      tabsRef.current &&
      labelsRef.current
    ) {
      const tabsChildren = Array.from(tabsRef.current.children)
      const labelsChildren = Array.from(labelsRef.current.children)
      labelsChildren.forEach((child) =>
        child.setAttribute('aria-current', 'false')
      )
      tabsChildren.forEach((child) =>
        child.setAttribute('aria-current', 'false')
      )
      target.setAttribute('aria-current', 'true')
      const tab = tabsChildren.find((child) => child.id === target.dataset.tab)
      if (tab) {
        tab.setAttribute('aria-current', 'true')
      }
    }
  }
  useEffect(() => {
    labelsRef.current?.addEventListener('click', handleLabelsClick)
    return () => {
      labelsRef.current?.removeEventListener('click', handleLabelsClick)
    }
  }, [])
  return (
    <div className="tabs">
      <ul className="tabs-labels" ref={labelsRef}>
        {React.Children.map(
          children as React.ReactElement[],
          (child: React.ReactElement, i: number) => (
            <li
              key={i}
              className="tabs-label"
              aria-current={i === 0}
              data-tab={i.toString()}
            >
              {child.props.label}
            </li>
          )
        )}
      </ul>
      <ul className="tabs-items" ref={tabsRef}>
        {React.Children.map(
          children as React.ReactElement[],
          (child: React.ReactElement, i: number) => (
            <li
              key={i}
              id={i.toString()}
              className="tabs-item"
              aria-current={i === 0}
            >
              {child.props.children}
            </li>
          )
        )}
      </ul>
    </div>
  )
}

interface TabProps {
  label: string
  children: TabsProps['children']
}

export function Tab(props: TabProps) {
  return props.children
}
