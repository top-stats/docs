export const botResponse = {
  bot: [
    {
      value: 'id',
      types: ['string'],
      description: 'Discord bot id',
    },
    {
      value: 'certified',
      types: ['boolean'],
      description: 'Indicates wether the bot is certified on Top.gg',
      isDeprecated: true,
    },
    {
      value: 'owners',
      types: ['string [ ]', 'null'],
      description: "Array of discord id's of the owners of the bot",
    },
    {
      value: 'deleted',
      types: ['boolean'],
      description: 'Indicates wether the bot is deleted off of Top.gg',
    },
    {
      value: 'name',
      types: ['string'],
      description: 'Name of the bot',
    },
    {
      value: 'def_avatar',
      types: ['string'],
      description: 'Default avatar for the bot',
    },
    {
      value: 'avatar',
      types: ['string', 'null'],
      description: 'Avatar for the bot',
    },
    {
      value: 'short_desc',
      types: ['string'],
      description: 'Short description of the bot',
    },
    {
      value: 'lib',
      types: ['string'],
      description: 'The library that the bot was written in',
      isDeprecated: true,
    },
    {
      value: 'prefix',
      types: ['string'],
      description: "The bot's prefix",
    },
    {
      value: 'website',
      types: ['string'],
      description: "The bot's website",
    },
    {
      value: 'approved_at',
      types: ['string'],
      description: "The timestamp of when the bot was approved on Top.gg",
    },
    {
      value: 'monthly_votes',
      types: ['number'],
      description: "The number of monthly votes for the current month",
    },
    {
      value: 'server_count',
      types: ['number'],
      description: "Current total server count",
    },
    {
      value: 'total_votes',
      types: ['number'],
      description: "All time current total votes",
    },
    {
      value: 'shard_count',
      types: ['number'],
      description: "Current shard count",
    },
    {
      value: 'monthly_votes_rank',
      types: ['number'],
      description: "Current monthly votes rank",
    },
    {
      value: 'server_count_rank',
      types: ['number'],
      description: "Current server count rank",
    },
    {
      value: 'shard_count_rank',
      types: ['number'],
      description: "Current shard count rank",
    },
    {
      value: 'total_votes_rank',
      types: ['number'],
      description: "Current total votes rank",
    },
    {
      value: 'timestamp',
      types: ['number'],
      description: "Last updated timestamp",
    },
    {
      value: 'unix_timestamp',
      types: ['number'],
      description: "Last updated unix timestamp",
    },
  ],

  historical: [
    {
      value: "time",
      types: ['date'],
      description: "Timestamp of date",
    },
    {
      value: "id",
      types: ['string'],
      description: 'Discord bot id',
    },
    {
      value: "type",
      types: ['number'],
      description: 'The count of the type you have provided.',
    },
  ]

}
