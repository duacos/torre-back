let default_domain;

if (process.env.NODE_ENV !== "production") {
  default_domain = "localhost";
}

export default {
  port: 8000,
  domain: default_domain,
  origin: `http://${default_domain}:3000`,
};
