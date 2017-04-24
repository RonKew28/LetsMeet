class Group < ApplicationRecord

  validates :name, :founded_date, :category, :creator, :description, :location, presence: true
  validates :name, uniqueness: true
  # need to put in lat, lng, and image_url later

  belongs_to :creator,
    class_name: :User,
    primary_key: :id,
    foreign_key: :creator_id

  has_many :events

  has_many :memberships

  has_many :members,
    through: :memberships,
    source: :member

  def save_and_join
    transaction do
      self.founded_date = Date.new()
      save
      Membership.create(group_id: self.id, member_id: creator.id)
    end
  end

end
