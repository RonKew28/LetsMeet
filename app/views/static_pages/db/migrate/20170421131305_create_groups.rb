class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.date :founded_date, null: false
      t.integer :category_id, null: false
      t.integer :creator_id, null: false
      t.text :description, null: false
      t.string :location, null: false

      t.timestamps

    end
    add_index :groups, :name, unique:true
    add_index :groups, :creator_id
  end
end
