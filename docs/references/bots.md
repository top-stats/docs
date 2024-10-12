---
sidebar_position: 1
---

import Highlight from './../../src/components/Hightlight';

# Bots

## Fetch a Bot <Highlight color="#25c2a0">GET</Highlight>

Fetch a specific bot from our API.

```markdown
/api/bots/:id
```

#### Example Response

```json
{
  "certified": false,
  "owners": [
    "321714991050784770",
    "205680187394752512",
    "116930717241311236"
  ],
  "deleted": false,
  "id": "583807014896140293",
  "name": "DBL Statistics",
  "def_avatar": "1cbd08c76f8af6dddce02c5138971129",
  "avatar": "d9c16daef96dfa39e4b1235e5bcd9979",
  "short_desc": "Get statistics of every bot listed on top.gg",
  "lib": "discord.js",
  "prefix": "dbl-",
  "website": "https://dblstatistics.com/",
  "approved_at": "2020-08-02T12:39:32.440Z",
  "monthly_votes": 32,
  "server_count": 68,
  "total_votes": 33,
  "shard_count": 0,
  "monthly_votes_rank": 1023,
  "server_count_rank": 3176,
  "total_votes_rank": 4708,
  "shard_count_rank": 11974,
  "timestamp": "2020-08-15T08:00:00.222Z",
  "unix_timestamp": 1597478400
}
```

