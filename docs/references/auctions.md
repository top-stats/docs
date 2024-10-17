---
sidebar_position: 3
---

import Highlight from './../../src/components/Hightlight';

# Auctions

:::danger[deprecated]
Auctions is currently deprecated, due to issues with fetching this data. 

The routes listed below are out of date and will not be supported going forward.
:::

## Active Bids <Highlight color="#25c2a0">GET</Highlight>

Gets the currently active bids.

```
/api/auctions/current
```

## Auctions Tags <Highlight color="#25c2a0">GET</Highlight>

Gets all the tags for auctions.

```
/api/auctions/tags
```

#### Example Response

```json
{
  "bot": [
    "Front Page - Trending New",
    "Front Page - Top Voted",
    "Top Page"
  ],
  "server": [
    "Front Page",
    "Emotes Tag",
    "Top Page"
  ]
}
```
