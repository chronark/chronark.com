<div align="center">
    <a href="https://www.morenikejipopoola.com"><h1 align="center">morenikejipopoola.com</h1></a>

My personal website, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Mongoose](https://mongoosejs.com), [MongoDB](https://www.mongodb.com), [Contentlayer](https://www.contentlayer.dev/) and deployed to [Vercel](https://vercel.com/).

This portfolio website, built on top of [Chronark/chronark.com](https://github.com/chronark/chronark.com) with the following core changes inclusion of a Resume page, migrating pageview tracking and Ip Deduplication away from `@upstash/redis` to `next.js api routes` and `mongodb` for data persisitence.

</div>

<br/>

## Running Locally

```sh-session
git clone git@github.com:kejiahp/morenikejipopoola.com.git
cd chronark.com
```

Create a `.env` file similar to [`.env.example`](git@github.com:kejiahp/morenikejipopoola.com/blob/main/.env.example).

Then install dependencies and run the development server:

```sh-session
pnpm install
pnpm dev
```

## Cloning / Forking

Please remove all of my personal information (projects, images, etc.) before deploying your own version of this site.
