---
sidebar_position: 2
---

# Ratelimits

:::warning

Continuously surpassing our **ratelimits** will result in a cooldown or a permenant ban from using our API. 

:::

| Route              | Requests Per Minute |
|--------------------|---------------------|
| /bots/:id          | 60                  |
| /bots/:id/previous | 20                  |
| /bots/top          | 60                  |
| /auctions/tags     | 60                  |
| /users/:id/bots    | 60                  |
| /bots/top          | 60                  |


## What Happens When I am RateLimited?
When you are rate-limited, you will receive this response, you can use this to wait until your ratelimit has been lifted before sending another response.
```json
{
  "code": 429, 
  "message": "You are being rate-limited", 
  "retryAfter": "{time}"
}
```

## I am Banned, What Can I Do?
If you've been banned from using our API, you can reach out to our team in [Our Discord](https://discord.com/invite/cB4q5YP).
