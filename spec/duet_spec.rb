require 'duet'

describe Duet do
end

get "/" do
  show creator page
end

get "/:id" do
  show joiner page
end

get "/listen/" do
  create Client
  create Pair
  listen in Pair for joiner
end

get "/listen/:id" do
  create Client
  join Pair with :id
  listen in Pair for creator
end

post "/update/:uid" do
  find client
  update client status
    the client notifies the pair
      the pair notifies the other member
end
