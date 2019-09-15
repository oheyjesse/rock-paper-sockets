defmodule RockPaperSocketsWeb.Router do
  use RockPaperSocketsWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", RockPaperSocketsWeb do
    pipe_through :browser

    # This route declaration MUST be below everything else! Else, it will
    # override the rest of the routes, even the `/api` routes we've set above.
    get "/*path", PageController, :index
  end

end
