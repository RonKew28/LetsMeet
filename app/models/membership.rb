class Membership < ApplicationRecord

  validates :member_id, uniqueness: { scope: :group_id }
  validates :member_id, :group_id, presence: true

  belongs_to :member,
  class_name: :User,
  primary_key: :id,
  foreign_key: :member_id

  belongs_to :group

end
