use Mix.Config

# Configure your database
config :rock_paper_sockets, RockPaperSockets.Repo,
  username: "postgres",
  password: "postgres",
  database: "rock_paper_sockets_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :rock_paper_sockets, RockPaperSocketsWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
