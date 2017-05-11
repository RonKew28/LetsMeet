class CreateCategoryGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :category_groups do |t|
      t.integer :category_id, null: false
      t.integer :group_id, null: false

      t.timestamps
    end
  end
end
