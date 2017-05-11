class Group < ApplicationRecord
  include PgSearch
  pg_search_scope :search_by_details, :against => [:name, :description]
  validates :name, :founded_date, :category, :creator, :description, :location, presence: true
  validates :name, uniqueness: true

  belongs_to :creator,
    class_name: :User,
    primary_key: :id,
    foreign_key: :creator_id

  has_many :events

  has_many :memberships,
  dependent: :destroy

  has_many :members,
    through: :memberships,
    source: :member

  has_many :category_groups
    dependent: :destroy

  has_many :categories,
  through: :category_groups,
  source: :category

  def save_and_join
    transaction do
      self.founded_date = Date.new()
      save
      Membership.create(group_id: self.id, member_id: creator.id)
    end
  end

end
