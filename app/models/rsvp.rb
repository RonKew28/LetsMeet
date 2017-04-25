class Rsvp < ApplicationRecord
  validates :attendee, :event, presence: true
  validates :attendee_id, uniqueness: { scope: :group_id }

  belongs_to :attendee,
    class_name: :User,
    primary_key: :id,
    foreign_key: :attendee_id

  belongs_to :event
end
