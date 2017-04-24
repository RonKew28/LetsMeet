class Group < ApplicationRecord

  validates :name, :founded_date, :category, :creator, :description, :location, presence: true
  validates :name, uniqueness: true
  # need to put in lat, lng, and image_url later

  belongs_to :creator,
  class_name: :User,
  primary_key: :id,
  foreign_key: :creator_id

  has_many :events


end
