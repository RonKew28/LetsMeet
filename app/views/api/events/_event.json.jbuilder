json.extract! event, :id, :name, :description, :location_name, :location_address, :time, :group, :date, :organizer_id, :organizer

json.organizer do
  json.extract! event.organizer, :id, :username
end

json.group do
  json.extract! event.group, :id, :name
end

json.attendees do
  json.array! event.attendees do |attendee|
    json.extract! attendee, :id, :name
  end
end

json.group_founded_date event.group.founded_date.to_formatted_s(:long_ordinal)
