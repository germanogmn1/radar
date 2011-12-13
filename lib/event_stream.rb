require 'json'

class EventStream
  def self.dump(event_name=nil,data=nil)
    data, event_name = event_name, nil if event_name.kind_of? Hash
    str = ""
    str << "event: #{event_name}\n" if event_name
    str << "data: #{JSON.dump(data)}\n" if data
    str << "\n"
  end
end