import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  distDir: './dist',
  reactStrictMode: true,
};

export default withMDX(config);
