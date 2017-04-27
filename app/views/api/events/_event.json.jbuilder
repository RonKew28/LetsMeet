json.extract! event, :id, :name, :description, :location_name, :location_address, :time, :date

json.organizer do
  json.extract! event.organizer, :id, :username
end


json.attendees do
  json.array! event.attendees do |attendee|
    json.extract! attendee, :id, :username
  end
end

json.attendee_count event.attendees.length
