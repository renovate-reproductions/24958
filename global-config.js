module.exports = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  token: process.env.GITHUB_TOKEN,
  binarySource: "install",
  onboarding: false,
  gitAuthor: process.env.GIT_USERNAME + " <" + process.env.GIT_EMAIL + ">",
};
