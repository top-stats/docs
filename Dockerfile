# Stage 1: Base image.
## Start with a base image containing NodeJS so we can build Docusaurus.
FROM node:lts as base
## Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0
## Enable corepack.
RUN corepack enable
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus

## Copy over the source code.
COPY . .
## Install dependencies with `--immutable` to ensure reproducibility.
RUN npm ci
## Build the static site.
RUN npm run build

FROM node:lts-alpine as deploy
## Copy the Docusaurus build output.
COPY --from=base /opt/docusaurus/build /var/docusaurus
## Run
CMD npx serve -s /var/docusaurus