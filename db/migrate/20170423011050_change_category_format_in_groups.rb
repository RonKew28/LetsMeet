class ChangeCategoryFormatInGroups < ActiveRecord::Migration[5.0]
  def change
    change_column :groups, :category, :string
  end
end
