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
    broadcast!(socket, "new_msg", %{name: "Testy McUser", body: body})
    {:noreply, socket}
  end

  def handle_in("set_name", %{"name" => name}, socket) do
    broadcast!(socket, "name_change", %{old_name: socket.assigns.user_id, new_name: name})
    {:noreply, socket}
  end
end
