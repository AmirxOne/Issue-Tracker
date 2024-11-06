import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

function page() {
  return (
    <div>
      <Button>
        <Link href='issues/new'>New issue</Link>
      </Button>
    </div>
  )
}

export default page