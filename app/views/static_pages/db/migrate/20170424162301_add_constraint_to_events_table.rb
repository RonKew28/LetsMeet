class AddConstraintToEventsTable < ActiveRecord::Migration[5.0]
  def change
    change_column :events, :organizer_id, :integer, :null => false
  end
end
