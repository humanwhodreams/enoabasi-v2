const isDevelopmentEnvironment = process.argv.indexOf("dev") !== -1;
const isBuildEnvironment = process.argv.indexOf("build") !== -1;

if (
  !process.env.VELITE_STARTED &&
  (isDevelopmentEnvironment || isBuildEnvironment)
) {
  process.env.VELITE_STARTED = "1";

  const { build } = await import("velite");

  await build({
    watch: isDevelopmentEnvironment,
    clean: !isDevelopmentEnvironment,
  });
}

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
