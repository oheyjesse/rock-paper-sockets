# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :rock_paper_sockets,
  ecto_repos: [RockPaperSockets.Repo]

# Configures the endpoint
config :rock_paper_sockets, RockPaperSocketsWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "z7/cw1CvHDmvWGGYsGu+tL/ODcbR5JgERvwk8/TWT1v5dGehpMEUWTWp7rT2ZE0M",
  render_errors: [view: RockPaperSocketsWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: RockPaperSockets.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
