json.extract! group, :id, :name, :description, :location, :category, :founded_date, :creator_id, :creator, :memberships, :members

json.member_count group.members.length
json.formatted_date group.founded_date.to_formatted_s(:long_ordinal)
