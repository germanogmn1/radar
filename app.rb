require 'sinatra'

class App < Sinatra::Base
  get '/' do
    send_file File.join(settings.public_folder, 'index.html')
  end
  
  post '/invite' do
    params[:email] 
  end
end

# set :server, :thin
# connections = []
# 
# get '/' do
#   # keep stream open
#   stream(:keep_open) { |out| connections << out }
# end
# 
# post '/' do
#   # write to all open streams
#   connections.each { |out| out << params[:message] << "\n" }
#   "message sent"
# end