defmodule RockPaperSockets.Matches.Match do
  @moduledoc """
  Data structure for a Match. A match holds players, and the state of the
  current match in play.
  """

  @enforce_keys [:id, :players, :round]
  defstruct [:id, players: [], round: 0]
end
