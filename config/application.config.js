module.exports = {
  PORT: process.env.PORT || 3000,
  secutirty: {
    SESSION_SECRET: "YOUR_SESSION-SECRET-STRING"
  },
  search: {
    MAX_ITEMS_PER_PAGE: 5
  }
};