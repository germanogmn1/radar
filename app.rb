require 'sinatra'
require 'digest/sha1'

set server: 'thin'

connections = {}

# show the session creator page
get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

# show the joiner page
get '/:id' do
end

# stream
get '/listen' do
  content_type 'text/event-stream'
  
  stream(:keep_open) do |out|
    # todo
  end
end

def log(msg)
  File.open('./log', 'a') do |f|
    f.puts(Time.now.strftime("[%Y-%m-%d %H:%M%S] ") + msg)
  end
end