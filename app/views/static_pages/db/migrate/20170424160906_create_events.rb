class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :group_id, null: false
      t.string :location, null: false
      t.datetime :date, null: false

      t.timestamps
    end

    add_index :events, :group_id
    add_index :events, :name


  end
end
