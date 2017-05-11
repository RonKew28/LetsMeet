class Category < ApplicationRecord
  validates :title, presence: true

  has_many :category_groups

  has_many :groups,
  through: :category_groups,
  source: :group
end
