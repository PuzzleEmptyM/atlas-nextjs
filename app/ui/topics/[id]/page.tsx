import { resolveCaa } from 'dns'
import React from 'react'

export default async function Page({ params }: { params: { id: string } }) {
      await new Promise(resolve => setTimeout(resolve, 500));
    return (<div>Topics page: {params.id}</div>
  )
}

