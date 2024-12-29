# ProteJÁ APP

ProteJÁ is a web application that acts as companion to the ProteJÁ totem and wearable device. It allows users to interact with the ProteJÁ system, view their data and configure their devices.

It is also responsible for pushing notifications to the user.

## Project setup

First install all the dependencies.

```shell
pnpm install
```

## To run use:

```shell
pnpm dev
```

## To add shadcn componets:

```shell
npx shadcn@latest add <component-name>
```

## Generating Supabase Types

First you need to login to your Supabase account.

```shell
npx supabase login
```

Then you can generate the types.

```shell
pnpm gen
```

> For detailed information please refer to the [documentation](https://supabase.com/docs/guides/api/rest/generating-types).

## Acknowledgements

- asd
