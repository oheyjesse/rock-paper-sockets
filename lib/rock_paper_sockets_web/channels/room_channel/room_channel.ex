defmodule RockPaperSocketsWeb.RoomChannel do
  use Phoenix.Channel

  @doc """
  Main public lobby channel
  """
  def join("room:lobby", _message, socket) do
    {:ok, socket}
  end

  @doc """
  Private Channels - Not yet implemented
  """
  def join("room:" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def handle_in("new_msg", %{"body" => body}, socket) do
    IO.inspect("yay")
    broadcast!(socket, "new_msg", %{body: body})
    {:noreply, socket}
  end
end
