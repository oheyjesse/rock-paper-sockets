defmodule RockPaperSockets.Players.Player do
  @moduledoc """
  Data structure for a player
  """

  @enforce_keys [:id, :name]
  defstruct [:id, :name, :weapon, :score]
end
