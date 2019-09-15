defmodule RockPaperSockets.Repo do
  use Ecto.Repo,
    otp_app: :rock_paper_sockets,
    adapter: Ecto.Adapters.Postgres
end
