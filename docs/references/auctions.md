---
sidebar_position: 3
---

import Highlight from './../../src/components/Hightlight';

# Auctions

## Active Bids <Highlight color="#25c2a0">GET</Highlight>

:::danger[deprecated]
Active bids is currently deprecated, due to issues with fetching this data.
:::
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
