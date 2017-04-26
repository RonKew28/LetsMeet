class CreateMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :memberships do |t|
      t.integer :member_id, null: false
      t.integer :group_id, null: false

      t.timestamps
    end

    add_index :memberships, [:group_id, :member_id], unique: true
  end
end
