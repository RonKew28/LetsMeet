class CategoryGroup < ApplicationRecord
  validtes :group, :category, presence: true
  
  belongs_to :group

  belongs_to :category
end
