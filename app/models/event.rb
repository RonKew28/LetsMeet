class Event < ApplicationRecord

  validates :name, :description, :group, :location, :date, :organizer, presence: true

  belongs_to :group

  belongs_to :organizer,
  class_name: :User,
  primary_key: :id,
  foreign_key: :organizer_id

  has_many :rsvps

  has_many :attendees,
  through: :rsvps,
  source: :attendee

  def save_and_attend
    transaction do
      self.date = Date.new()
      save
      Rsvp.create(event_id: self.id, attendee_id: organizer.id)
    end
  end
end
