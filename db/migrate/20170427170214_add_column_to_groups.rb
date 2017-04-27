class AddColumnToGroups < ActiveRecord::Migration[5.0]
  def change
    add_column :groups, :image_url, :string
  end
end
