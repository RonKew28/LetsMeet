class Event < ApplicationRecord
  include PgSearch
  pg_search_scope :search_by_details, :against => [:name, :description]
  validates :name, :description, :group, :location_name, :location_address, :time, :date, :organizer, presence: true

  belongs_to :group

  belongs_to :organizer,
  class_name: :User,
  primary_key: :id,
  foreign_key: :organizer_id

  has_many :rsvps

  has_many :attendees,
  through: :rsvps,
  source: :attendee

  def attend
    Rsvp.create(event_id: self.id, attendee_id: organizer.id)
  end

  def self.upcoming_events(events)
    events.select { |event| event.date > DateTime.now }
  end
end
