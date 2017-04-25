json.extract! event, :id, :name, :description, :location, :group, :date, :organizer_id, :organizer

json.group_founded_date event.group.founded_date.to_formatted_s(:long_ordinal)
