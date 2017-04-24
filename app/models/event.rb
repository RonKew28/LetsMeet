class Event < ApplicationRecord

  validates :name, :description, :group, :location, :date, :organizer presence: true

  belongs_to :group

  belongs_to :organizer,
  class_name: :User,
  primary_key: :id,
  foreign_key: :organizer_id

end
