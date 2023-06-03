# `mapSift`

>- Perform map and filter operations in the same iteration

## Install

```sh
npm install map-sift
```

## Usage

```typescript
import mapSift from 'map-sift'

type Person = { name: string, height?: number }

const people: Person[] = [
    { name: 'Alice', height: 180 },
    { name: 'Bob', height: 168 },
    { name: 'David', height: undefined },
    { name: 'Emma', height: 160 },
    { name: 'Frank' },
    { name: 'Grace', height: 155 },
]

// Without mapSift:
const heightsMapFilter = people
    .map(person => person.height)
    .filter(Boolean)
console.log(heightsMapFilter) // [180, 168, 160, 155]

// With mapSift:
const heightsMapSift = people
    .flatMap(mapSift(person => person.height))
console.log(heightsMapSift) // [180, 168, 160, 155]
```
