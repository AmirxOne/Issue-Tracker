'use client'
import { TextField } from '@radix-ui/themes';
import React from 'react'

function NewIssuePage() {
  return (
    <div className='max-w-xl'>
        <TextField.Root>
            <TextField.Input placeholder='Title'/>
        </TextField.Root>
    </div>
  )
}

export default NewIssuePage;