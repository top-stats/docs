---
sidebar_position: 2
---

import Highlight from './../../src/components/Hightlight';

# Users

## User Bots <Highlight color="#25c2a0">GET</Highlight>

:::warning[deprecated]
Data provided from this route may be inaccurate!

This occurs due to fact that bots moved to a team will remain on a users account irrespective of ownership
:::

Get all user bots.

```
/api/users/:id/bots
```


#### Example Response

```json
{
  "user": {
    "id": "205680187394752512",
    "avatar": "11d3cdae2582dc4ad1856e2878e45593",
    "def_avatar": "https://cdn.discordapp.com/embed/avatars/1.png",
    "tag": "Xignotic#0001"
  },
  "bots": [
    {
      "certified": true,
      "owners": [
        "205680187394752512"
      ],
      "deleted": false,
      "id": "461521980492087297",
      "name": "Shiro",
      "def_avatar": "1cbd08c76f8af6dddce02c5138971129",
      "avatar": "9f642706ac70dadb610e791bed68b314",
      "short_desc": "",
      "lib": "discord.js",
      "prefix": "x! (Customizable)",
      "website": "https://shiro.gg?ref=topgg",
      "approved_at": "2018-09-22T11:25:10.962Z",
      "monthly_votes": 125,
      "server_count": 28199,
      "total_votes": 55662,
      "shard_count": 0,
      "monthly_votes_rank": 488,
      "server_count_rank": 134,
      "total_votes_rank": 83,
      "shard_count_rank": 2985,
      "timestamp": "2020-08-21T00:00:00.204Z",
      "unix_timestamp": 1597968000
    },
    {
      "certified": false,
      "owners": [
        "205680187394752512"
      ],
      "deleted": false,
      "id": "559726241280688130",
      "name": "DBL Watcher",
      "def_avatar": "0e291f67c9274a1abdddeb3fd919cbaa",
      "avatar": "daf5c30392b15a91e6db8ac811497a02",
      "short_desc": "",
      "lib": "discord.js",
      "prefix": "watcher ",
      "website": "",
      "approved_at": "2019-03-25T13:30:06.323Z",
      "monthly_votes": 1,
      "server_count": 15,
      "total_votes": 10,
      "shard_count": 0,
      "monthly_votes_rank": 9332,
      "server_count_rank": 4159,
      "total_votes_rank": 7439,
      "shard_count_rank": 4611,
      "timestamp": "2020-08-21T00:00:00.204Z",
      "unix_timestamp": 1597968000
    },
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
      "monthly_votes": 33,
      "server_count": 67,
      "total_votes": 34,
      "shard_count": 0,
      "monthly_votes_rank": 1156,
      "server_count_rank": 3233,
      "total_votes_rank": 4716,
      "shard_count_rank": 12085,
      "timestamp": "2020-08-21T00:00:00.204Z",
      "unix_timestamp": 1597968000
    }
  ]
}

```
