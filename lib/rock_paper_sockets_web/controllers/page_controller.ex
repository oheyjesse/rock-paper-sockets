defmodule RockPaperSocketsWeb.PageController do
  use RockPaperSocketsWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
