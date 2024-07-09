import { URLProps } from '@/types'
import React from 'react'

const Profile = ({params, searchParams}: URLProps) => {
  return (
    <div>{params.id}</div>
  )
}

export default Profile