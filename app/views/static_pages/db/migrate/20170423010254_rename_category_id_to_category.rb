class RenameCategoryIdToCategory < ActiveRecord::Migration[5.0]
  def change
    rename_column :groups, :category_id, :category
  end
end
