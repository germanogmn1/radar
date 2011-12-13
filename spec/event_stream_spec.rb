require 'event_stream'

describe EventStream do
  it "dumps event name" do
    EventStream.dump('create_user').should == <<-EOS
event: create_user

    EOS
  end
  
  it "dumps JSON data" do
    EventStream.dump(user: {
      name: 'Steve Stevens',
      email: 'some@email.com',
      description: "Lorem ipsum \ndolor\n\nsit amet"
    }).should == <<-EOS
data: {"user":{"name":"Steve Stevens","email":"some@email.com","description":"Lorem ipsum \\ndolor\\n\\nsit amet"}}

    EOS
  end
  
  it "dumps event name and data" do
    EventStream.dump('update',
      token: 'a6d1fc0a019ecd367a05ee136937d7018d807d50',
      position: { latitude: -30.051716, longitude: -51.097310 }
    ).should == <<-EOS
event: update
data: {"token":"a6d1fc0a019ecd367a05ee136937d7018d807d50","position":{"latitude":-30.051716,"longitude":-51.09731}}

    EOS
  end
end