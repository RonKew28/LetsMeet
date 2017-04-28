json.extract! group, :id, :name, :description, :location, :category, :founded_date, :creator_id, :creator, :memberships, :members, :image_url, :events


json.member_count group.members.length
json.formatted_date group.founded_date.strftime("%B %d, %Y")
