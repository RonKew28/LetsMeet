json.extract! event, :id, :name, :description, :location_name, :location_address, :time, :date

json.organizer do
  json.extract! event.organizer, :id, :username
end

json.group do
  json.extract! event.group, :id, :name
end

json.attendees do
  json.array! event.attendees do |attendee|
    json.extract! attendee, :id, :username
  end
end

json.attendee_count event.attendees.length

json.group_founded_date event.group.founded_date.to_formatted_s(:long_ordinal)
