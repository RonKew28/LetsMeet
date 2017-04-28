json.extract! event, :id, :name, :description, :location_name, :location_address, :time, :date, :organizer_id

json.attendee_count event.attendees.length

json.formatted_event_date event.date.strftime("%B %d, %Y")
json.event_time event.time.strftime("%H %M %S")

json.organizer do
  json.extract! event.organizer, :id, :username
end


json.attendees do
  json.array! event.attendees do |attendee|
    json.extract! attendee, :id, :username, :profile_pic_url
  end
end
