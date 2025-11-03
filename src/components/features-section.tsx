import React from 'react'

import { Card } from './ui/card'
import { Wand2 } from 'lucide-react'
import { Code2 } from 'lucide-react'
import { Copy } from 'lucide-react'
import { Moon } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <div className='mt-8 sm:mt-12 grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4'>
    <Card className="text-center p-4 sm:p-6 bg-card/30 backdrop-blur-sm">
    <div className="mx-auto mb-2 sm:mb-3 flex size-10 sm:size-12 items-center justify-center rounded-full bg-primary/10">
      <Wand2 className="size-5 sm:size-6 text-primary" />
    </div>
    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
      Instant Conversion
    </h3>
    <p className="text-xs sm:text-sm text-muted-foreground">
      Convert JSON to types in milliseconds
    </p>
  </Card>
  <Card className="text-center p-4 sm:p-6 bg-card/30 backdrop-blur-sm">
    <div className="mx-auto mb-2 sm:mb-3 flex size-10 sm:size-12 items-center justify-center rounded-full bg-primary/10">
      <Code2 className="size-5 sm:size-6 text-primary" />
    </div>
    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
      Smart Inference
    </h3>
    <p className="text-xs sm:text-sm text-muted-foreground">
      Handles nested objects and arrays
    </p>
  </Card>
  <Card className="text-center p-4 sm:p-6 bg-card/30 backdrop-blur-sm">
    <div className="mx-auto mb-2 sm:mb-3 flex size-10 sm:size-12 items-center justify-center rounded-full bg-primary/10">
      <Copy className="size-5 sm:size-6 text-primary" />
    </div>
    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
      One-Click Copy
    </h3>
    <p className="text-xs sm:text-sm text-muted-foreground">
      Copy types directly to your clipboard
    </p>
  </Card>
  <Card className="text-center p-4 sm:p-6 bg-card/30 backdrop-blur-sm">
    <div className="mx-auto mb-2 sm:mb-3 flex size-10 sm:size-12 items-center justify-center rounded-full bg-primary/10">
      <Moon className="size-5 sm:size-6 text-primary" />
    </div>
    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
      Dark Mode
    </h3>
    <p className="text-xs sm:text-sm text-muted-foreground">
      Easy on the eyes, day or night
    </p>
  </Card>
  </div>
  )
}
