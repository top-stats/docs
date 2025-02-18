---
sidebar_position: 1
---

import Highlight from './../../src/components/Hightlight';

# Bots
:::danger[API Shutting Down]
The DBL Statistics API is shutting down as we move away from DBLStatistics and continue its development at [TopStats.gg](https://topstats.gg)

You can check out the new api at our [docs here](https://docs.topstats.gg) and if you have any questions, you can contact us in our [Discord server](https://topstats.gg/discord)
:::

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

## Fetch Previous Bot Data <Highlight color="#25c2a0">GET</Highlight>

```markdown
/api/bots/:id/previous
```

### Query Paramaters

#### `limit`

#### Example Response

```json
{
  "id": "583807014896140293",
  "data": [
    {
      "owners": [
        "321714991050784770",
        "205680187394752512",
        "116930717241311236"
      ],
      "monthly_votes": 32,
      "server_count": 68,
      "total_votes": 33,
      "shard_count": 0,
      "monthly_votes_rank": 1025,
      "server_count_rank": 3177,
      "total_votes_rank": 4708,
      "shard_count_rank": 11974,
      "timestamp": "2020-08-15T09:00:00.210Z",
      "unix_timestamp": 1597482000
    },
    {
      "owners": [
        "321714991050784770",
        "205680187394752512",
        "116930717241311236"
      ],
      "shards": 0,
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
    },
    {
      "owners": [
        "321714991050784770",
        "205680187394752512",
        "116930717241311236"
      ],
      "shards": 0,
      "monthly_votes": 32,
      "server_count": 68,
      "total_votes": 33,
      "shard_count": 0,
      "monthly_votes_rank": 1020,
      "server_count_rank": 3176,
      "total_votes_rank": 4708,
      "shard_count_rank": 11974,
      "timestamp": "2020-08-15T07:00:00.216Z",
      "unix_timestamp": 1597474800
    }
  ]
}
```

## Fetch Top Bots <Highlight color="#25c2a0">GET</Highlight>

```markdown
/api/bots/top?sortby=
```

### Query Paramaters

#### `votes`

#### `monthly votes`

#### `servers`

#### `shards`

```json
[
  {
    "certified": false,
    "owners": [
      "275748765166469120"
    ],
    "deleted": false,
    "id": "432610292342587392",
    "name": "Mudae",
    "def_avatar": "dd4dbc0016779df1378e7812eabaa04d",
    "avatar": "29cb28fbf65a3958105026ab03abd306",
    "short_desc": "",
    "lib": "discord.js",
    "prefix": "$",
    "website": "https://www.patreon.com/mudae",
    "approved_at": "2018-04-21T21:17:57.793Z",
    "monthly_votes": 1683828,
    "server_count": 666905,
    "total_votes": 35867816,
    "shard_count": 400,
    "monthly_votes_rank": 1,
    "server_count_rank": 8,
    "total_votes_rank": 1,
    "shard_count_rank": 5,
    "timestamp": "2020-08-15T09:00:00.210Z",
    "unix_timestamp": 1597482000
  },
  {
    "certified": false,
    "owners": [
      "157605500488384512",
      "161693885121298432"
    ],
    "deleted": false,
    "id": "282859044593598464",
    "name": "ProBot ✨",
    "def_avatar": "0e291f67c9274a1abdddeb3fd919cbaa",
    "avatar": "156a0d2872579f1ffcaa5d2127239bfd",
    "short_desc": "",
    "lib": "Eris",
    "prefix": "# (Customizable)",
    "website": "https://probot.io",
    "approved_at": "2017-07-03T20:54:12.930Z",
    "monthly_votes": 378285,
    "server_count": 593700,
    "total_votes": 2154524,
    "shard_count": 320,
    "monthly_votes_rank": 2,
    "server_count_rank": 13,
    "total_votes_rank": 5,
    "shard_count_rank": 6,
    "timestamp": "2020-08-15T09:00:00.210Z",
    "unix_timestamp": 1597482000
  },
  {
    "certified": true,
    "owners": [
      "218508002255306752",
      "186199408981835776",
      "231459866630291459"
    ],
    "deleted": false,
    "id": "469610550159212554",
    "name": "ZeroTwo",
    "def_avatar": "1cbd08c76f8af6dddce02c5138971129",
    "avatar": "49149ed1f8d1292f6dad8746ef66ced9",
    "short_desc": "",
    "lib": "Discord4J",
    "prefix": "zt!",
    "website": "http://zerotwo.bot/index.php",
    "approved_at": "2018-08-24T01:38:54.254Z",
    "monthly_votes": 353327,
    "server_count": 450817,
    "total_votes": 3573868,
    "shard_count": 512,
    "monthly_votes_rank": 3,
    "server_count_rank": 19,
    "total_votes_rank": 4,
    "shard_count_rank": 3,
    "timestamp": "2020-08-15T09:00:00.210Z",
    "unix_timestamp": 1597482000
  }
]
```

