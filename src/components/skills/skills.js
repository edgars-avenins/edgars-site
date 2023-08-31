import React from 'react'
import styled from 'styled-components'
import SkillBar from './skill-bar'

export default styled(({ className, title = 'Skills', skills = [] }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {skills.map(skill => (
        <SkillBar key={skill.name} name={skill.name} />
      ))}
    </div>
  )
})`
  width: 100%;
`
